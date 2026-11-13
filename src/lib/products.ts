// src/lib/products.ts

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  isBeta?: boolean;
};

export const products: Product[] = [
  {
    slug: "satellite-geo-mapping-platform",
    name: "Satellite Geo-Mapping Platform",
    tagline: "Precision topographical analysis and clustering.",
    description:
      "Ingest, process, and analyze massive geographic datasets. By combining satellite imagery with local topographical data, this platform delivers high-resolution terrain mapping and predictive spatial clustering for large-scale logistics and planning.",
    features: [
      "High-resolution terrain extraction",
      "Predictive spatial clustering algorithms",
      "Automated boundary generation",
      "Low-latency map tile serving",
    ],
    specs: [
      { label: "Data Pipeline", value: "Stream Processing" },
      { label: "Resolution", value: "Sub-meter Accuracy" },
      { label: "Rendering", value: "WebGL Map Layers" },
    ],
    isBeta: false,
  },
  {
    slug: "field-force-management-suite",
    name: "Field Force Management Suite",
    tagline: "Total operational visibility for distributed teams.",
    description:
      "A high-performance command center for tracking, deploying, and managing on-ground personnel. Built for low-connectivity environments, ensuring your off-site operations run with the same precision as your in-house teams.",
    features: [
      "Offline-first mobile synchronization",
      "Real-time geolocation tracking & geo-fencing",
      "Automated attendance and shift logging",
      "Dynamic task routing and assignment",
    ],
    specs: [
      { label: "Architecture", value: "Offline-First Mobile Sync" },
      { label: "Latency", value: "< 50ms State Resolution" },
      { label: "Deployment", value: "Cloud / Self-Hosted Docker" },
    ],
    isBeta: false,
  },
  {
    slug: "vector-embedding-infrastructure",
    name: "Vector Embedding Infrastructure",
    tagline: "High-dimensional data retrieval at scale.",
    description:
      "Enterprise-grade infrastructure for managing, querying, and scaling vector embeddings. Designed to power semantic search, recommendation engines, and advanced AI retrieval pipelines with sub-millisecond query times.",
    features: [
      "Distributed vector indexing (HNSW)",
      "Native integration with PostgreSQL (pgvector)",
      "Automated dimensionality reduction pipelines",
      "Secure multi-tenant data isolation",
    ],
    specs: [
      { label: "Index Engine", value: "Custom HNSW / IVFFlat" },
      { label: "Throughput", value: "10k+ Queries / Second" },
      { label: "Integration", value: "REST & gRPC APIs" },
    ],
    isBeta: true,
  },
  {
    slug: "industrial-research-simulator",
    name: "Industrial Research Simulator",
    tagline: "Predictive modeling for physical manufacturing.",
    description:
      "A deterministic physics and resource simulation engine. Test production line changes, material stress limits, and workflow bottlenecks in a secure digital environment before deploying capital in the real world.",
    features: [
      "Resource flow and bottleneck prediction",
      "Material stress and lifecycle modeling",
      "Variable timeline forecasting",
      "Visual 3D parameter mapping",
    ],
    specs: [
      { label: "Engine", value: "Deterministic Physics Compute" },
      { label: "Data Format", value: "JSON / CSV Ingestion" },
      { label: "Output", value: "Interactive 3D Visualizer" },
    ],
    isBeta: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}