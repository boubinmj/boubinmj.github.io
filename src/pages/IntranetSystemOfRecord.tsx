export default function Intranet() {
  return (
    <div className="page">
      <div className="blog-post-container">
        <h1>Intranet as a System of Record</h1>
        <p className="blog-date">January 2026</p>
        <article className="blog-post-content">
           <section id="introduction">
              <h2>Introduction</h2>
              <p>
                Mid-sized organizations don't need complicated software to manage institutional relationships.
                They need a clear system of record. At its core, relationship tracking is a straightforward
                data problem: organizations exist, people belong to them, and interactions accumulate over
                time. Yet many teams overbuild, scattering this information across spreadsheets, inboxes,
                and disconnected tools. A well-designed internal data application replaces that
                fragmentation with a single structured source of truth built on a relational model,
                exposed through a lightweight service layer, and delivered through a secure intranet
                interface. The goal isn't feature richness; its durability, clarity, and long-term
                ownership of institutional memory.
              </p>
              <p>
                In this post, I'll walk through a canonical, production-ready architecture that serves as
                a practical foundation for most mid-sized organizations building an internal system of
                record.
              </p>
        </section>
         <section id="core-data-model">
        <h2>Core Data Model</h2>
        <p>
          At a foundational level, a relationship system of record only requires four core object
          types: Organizations, People, Engagements, and Opportunities. Each of these objects maps
          directly to a table in the relational database powering the intranet service. Organizations
          represent external entities your institution interacts with. People are individuals
          associated with those organizations. Engagements form the historical ledger of every
          interaction over time, anchoring the system as an auditable record rather than a transient
          communication log. Opportunities provide a structured way to track forward-looking
          initiatives tied to an organization such as partnerships, funding efforts, or strategic
          collaborations. Modeled relationally, these tables establish a clean, durable backbone
          that supports querying, reporting, and institutional memory without unnecessary abstraction.
        </p>
        <h3>Relational Schema</h3>
        <p>
          <img src="/media/blogs/intranet-as-system/schema-intranet.png" alt="Core data model diagram (placeholder link)" />
        </p>

      </section>

      <section id="application-architecture">
        <h2>Application Architecture</h2>

        <section id="backend">
          <h3>Backend (Simple, Durable Stack)</h3>
          <p>
            A system-of-record application for a mid-sized organization doesn't require exotic
            infrastructure. The backend can be built from a small set of well-understood,
            battle-tested components that prioritize durability, transparency, and long-term
            maintainability over platform complexity.
          </p>

          <h4>Postgres as the single source of truth</h4>
          <p>
            At the core sits a relational Postgres database. Every organization, person, engagement,
            and opportunity lives here in normalized tables with explicit foreign-key relationships.
            This ensures the system behaves like an institutional ledger rather than a collection of
            loosely connected documents. Postgres provides transactional integrity, strong indexing,
            mature tooling, and decades of proven reliability — exactly what a long-lived internal
            record system demands.
          </p>

          <h4>API layer (REST)</h4>
          <p>
            Above the database, a thin API layer exposes structured access to the data. Whether
            implemented as REST endpoints, this layer acts as a controlled gateway between the
            frontend and the system of record. It enforces validation, authorization, and
            consistent data contracts while keeping business logic centralized and testable.
          </p>

          <h4>Server framework (Django / FastAPI)</h4>
          <p>
            The application logic lives in a conventional server framework. The choice of stack
            matters far less than the discipline of keeping the application thin and schema-driven.
            The framework's job is straightforward: map database models to API responses, handle
            authentication, and orchestrate simple workflows around engagements and opportunities.
          </p>

          <h4>Background jobs (reminders and rollups)</h4>
          <p>
            A lightweight worker process handles scheduled tasks: upcoming follow-ups, stale
            opportunities, engagement scoring, and periodic aggregations. This replaces the need
            for embedded automation engines with deterministic, auditable code running on a
            predictable schedule.
          </p>
        </section>
        <section id="why-not-crm">
          <h3>Why this works better than CRM platforms</h3>
          <p>
            This approach succeeds because it treats relationship data as a standard internal
            application problem rather than a specialized platform concern.
          </p>

          <h4>Schema clarity</h4>
          <p>
            The data model is explicit and human-readable. Every entity and relationship is defined
            directly in tables, making the structure understandable to engineers, analysts, and
            administrators alike.
          </p>

          <h4>No metadata abstraction layer</h4>
          <p>
            There's no hidden object system or platform schema interpreter. What you design is what
            exists in the database. This eliminates indirection and reduces the cognitive overhead
            required to evolve the system.
          </p>

          <h4>No proprietary automation engine</h4>
          <p>
            Workflows are implemented as simple application code and scheduled jobs instead of
            opaque visual builders. Behavior is predictable, version-controlled, and easy to debug.
          </p>

          <h4>Easy exports and full ownership</h4>
          <p>
            Because the system is built on standard infrastructure, the organization always retains
            direct access to its data. Backups, migrations, and integrations remain straightforward.
          </p>

          <h4>Predictable performance</h4>
          <p>
            Queries run directly against relational structures designed for reporting and analytics.
            There are no platform limits, governor constraints, or hidden execution layers.
          </p>
        </section>
      </section>

      <section id="infrastructure-architecture">
        <h2>Infrastructure Architecture</h2>
        <p>
          Behind every reliable internal system of record is a small set of predictable
          infrastructure layers working together to deliver security, durability, and operational
          stability. Unlike experimental product stacks, institutional systems benefit from proven,
          standardized components that minimize long-term risk and reduce maintenance overhead. The
          architecture outlined below represents a canonical cloud pattern for mid-sized
          organizations: traffic enters through a managed edge layer, flows through scalable
          containerized services, and lands in a relational data store designed to preserve
          institutional memory. Each component plays a specific role in ensuring that the
          application remains fast, secure, and maintainable as the organization grows.
        </p>

        <p>
          <img
            src="/media/blogs/intranet-as-system/Intranet Backend.drawio.png"
            alt="Infrastructure architecture diagram (placeholder link)"
          />
        </p>

        <h3>Amazon Route 53 - DNS &amp; Entry Point</h3>
        <p>
          Route 53 acts as the authoritative DNS provider for the application domain. It resolves
          user requests and directs traffic to CloudFront and the load balancer. In an intranet
          context, this is typically paired with private hosted zones or restricted access policies
          so the application is only reachable by authorized staff networks.
        </p>

        <h3>Amazon CloudFront - Secure Edge Layer</h3>
        <p>
          CloudFront sits at the edge and serves as the public-facing gateway to the intranet
          frontend and static assets. It caches UI bundles and media from S3, reduces latency, and
          provides an additional security boundary before traffic ever reaches application compute.
        </p>

        <h3>Elastic Load Balancing - Traffic Distribution</h3>
        <p>
          The load balancer routes incoming application traffic from CloudFront to containerized
          backend services running on ECS/Fargate. It provides a stable endpoint and automatically
          distributes requests across healthy containers.
        </p>

        <h3>ECS + AWS Fargate - Application Compute</h3>
        <p>
          The backend application runs as containerized services on ECS using Fargate. This allows
          the organization to deploy standard web services without managing servers.
        </p>

        <h4>Why Fargate is ideal here</h4>
        <ul>
          <li>No infrastructure maintenance</li>
          <li>Predictable scaling</li>
          <li>Pay-per-use</li>
          <li>Simple deployment model for small teams</li>
        </ul>

        <p>Containers host:</p>
        <ul>
          <li>API service</li>
          <li>Background workers</li>
          <li>Auth/session handling</li>
        </ul>

        <p>
          This keeps compute isolated, replaceable, and easy to update.
        </p>

        <h3>RDS (Postgres) - System of Record Database</h3>
        <p>
          RDS with Postgres is the primary structured data store. It holds normalized relational
          tables representing organizations, people, engagements, and opportunities.
        </p>

        <h4>Role in the architecture</h4>
        <ul>
          <li>Transactional integrity</li>
          <li>Referential relationships</li>
          <li>Analytics-friendly queries</li>
          <li>Durable long-term storage</li>
        </ul>

        <p>
          This is the authoritative institutional data layer.
        </p>

        <h3>DocumentDB — Optional Unstructured Store</h3>
        <p>
          DocumentDB provides a place for semi-structured or flexible data that doesn't fit cleanly
          into relational tables (e.g., imported datasets, raw logs, external payloads). While
          optional, it can serve as a buffer layer for ingestion-heavy workflows.
        </p>

        <h3>S3 — Media &amp; File Storage</h3>
        <p>
          S3 acts as the object store for documents attached to engagements and opportunities —
          contracts, proposals, decks, reports, etc.
        </p>

        <h4>Why S3 is critical</h4>
        <ul>
          <li>Infinite, cheap storage</li>
          <li>Decouples files from database</li>
          <li>Versioning and lifecycle policies</li>
          <li>Secure access via signed URLs</li>
        </ul>

        <p>
          CloudFront delivers these files efficiently and securely.
        </p>

        <h3>Architectural Outcome</h3>
        <p>Together, these components create a clean internal platform:</p>
        <ul>
          <li>Edge delivery and security (Route53 + CloudFront)</li>
          <li>Scalable compute (ECS/Fargate behind ELB)</li>
          <li>Durable relational data (RDS/Postgres)</li>
          <li>Flexible storage (S3 + optional DocumentDB)</li>
        </ul>

        <p>
          This is a modern, low-maintenance infrastructure pattern optimized for internal systems
          that need longevity and institutional trust more than product complexity.
        </p>
      </section>
      <section id="frontend">
        <h2>Frontend</h2>

        <h3>Core Screens</h3>
        <p>
          A relationship system of record succeeds or fails at the interface layer. The frontend
          should feel fast, obvious, and frictionless — optimized around daily use rather than
          administrative configuration.
        </p>

        

        <h4>Organization Profile</h4>
        <p>
          Each organization has a dedicated profile page that acts as the canonical timeline for
          the relationship. This view aggregates every engagement in chronological order, displays
          associated people, and surfaces active opportunities. The org page is the primary unit of
          institutional memory: a single place where any staff member can instantly understand the
          full history and current state of the relationship.
        </p>

        <h4>People by Organization</h4>
        <p>
          A structured roster of contacts tied to each organization. This is not just a contact list
          — it represents the human surface area of the relationship. Titles, roles, and
          communication details remain tightly linked to the parent org, preserving context and
          eliminating duplication.
        </p>

        <h4>Log Engagement Modal</h4>
        <p>
          Speed of capture is everything. A lightweight modal allows staff to record an interaction
          in seconds without leaving the org context. Minimal required fields, fast keyboard entry,
          and smart defaults reduce friction and encourage consistent logging. The system should
          feel closer to jotting a note than filling out a form.
        </p>

        <h4>Pipeline / Opportunities View</h4>
        <p>
          When enabled, opportunities are displayed in a simple stage-based board tied directly to
          organizations. This gives visibility into future-facing work without bloating the core
          engagement workflow.
        </p>

        <h4>Activity Dashboard</h4>
        <p>
          A cross-org view showing recent engagements, upcoming follow-ups, and relationship health
          indicators. This functions as an operational layer on top of the system of record —
          highlighting where attention is needed without altering underlying data structures.
        </p>
      </section>

      <section id="conclusion">
        <h2>Conclusion</h2>
        <p>
          Building an internal system of record for organizational relationships is far less about
          software features than it is about architectural discipline. When organizations reduce the
          problem to its essentials: clear relational entities, a lightweight application layer, fast
          engagement capture, and a stable cloud infrastructure, they gain something far more valuable
          than a tool: they create durable institutional memory. Every interaction becomes
          structured, searchable, and preserved in a system the organization fully owns. By relying
          on standard components such as Postgres, containerized services, object storage, and a focused
          frontend, mid-sized teams can deploy a reliable platform that is simpler to maintain, easier
          to evolve, and aligned with how people actually work. The result is not just a database or
          an app, but a long-lived foundation that quietly strengthens relationships, continuity, and
          organizational knowledge over time.
        </p>
      </section>

      </article>
      </div>
    </div>
  )
}
