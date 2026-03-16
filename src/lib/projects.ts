export interface Project {
  name: string;
  description: string;
  link: string;
  tags: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: "Custom CI/CD Pipeline Manager",
    description:
      "A simple CI/CD pipeline management system with a web dashboard and Python backend, deployable via Docker Compose. Features include real-time pipeline monitoring, background job execution, live log streaming, and an auto-refresh dashboard. Pipelines are defined as JSON with configurable steps, variables, and timeouts. The frontend is built with TypeScript and React, offering a lightweight local alternative to hosted CI/CD tooling.",
    link: "https://github.com/jkalend/custom-cicd",
    tags: ["Python", "TypeScript", "React", "CI/CD", "Docker"],
    featured: true,
  },
  {
    name: "EEG-based Detection of Internet Addiction",
    description:
      "A deep learning research project focused on classifying EEG recordings for signals associated with internet addiction, implemented in Python and PyTorch. The main model combined Transformer blocks with convolutional layers and residual connections, while several alternatives including LSTMs and raw CNN variants were evaluated to compare representation quality, stability, and overall classification performance. Bachelor thesis project.",
    link: "https://huggingface.co/Soromis/BP-transformer-EEG/blob/main/Bachelor_thesis.pdf",
    tags: ["Python", "PyTorch", "Deep Learning", "EEG"],
    featured: true,
  },
  {
    name: "Storehouse",
    description:
      "A proof-of-concept storage and inventory management system built with Go microservices communicating via gRPC, orchestrated on Kubernetes. Includes an Inventory Service (product stock levels), Order Service (customer orders), with Docker containerization and automatic database schema initialization with sample data. Designed as an educational exercise in distributed systems, gRPC inter-service communication, and resilient architecture. Includes a testing client and PowerShell scripts for proto generation, image build, and K8s deployment.",
    link: "https://github.com/jkalend/Go-storehouse",
    tags: ["Go", "Kubernetes", "gRPC", "Microservices"],
    featured: true,
  },
  {
    name: "Turing Machine",
    description:
      "A nondeterministic Turing machine simulator in Prolog using BFS to avoid infinite loops that would occur with DFS. States are dynamic predicates and the tape is a list of symbols; the model validates input, applies matching rules, and prints the output. Includes input validation (tape symbols, rule format, start/final state presence), exit code mapping for different failure modes, and example runs demonstrating empty-tape handling and loop avoidance. Built with SWI-Prolog and Make.",
    link: "https://github.com/jkalend/VUT-FLP/tree/main/FLP2",
    tags: ["Prolog", "Automata Theory"],
    featured: true,
  },
  {
    name: "Digital Piano Tone Synthesis",
    description:
      "Advanced DSP for analyzing and synthesizing piano tones in Python. Covers MIDI notes 24–108 with autocorrelation for lower tones and DFT-based spectral analysis for higher ones, plus DTFT refinement for cent-level accuracy. Extracts magnitude and phase for the first five harmonics, reconstructs tones via inverse DTFT, and generates complete musical pieces from note sequences at 48 kHz and 8 kHz. Uses SciPy, NumPy, Matplotlib, and SoundFile for processing and visualization.",
    link: "https://github.com/jkalend/VUT-ISS",
    tags: ["Python", "DSP", "Signal Processing"],
    featured: true,
  },
  {
    name: "Simulation Model of SpaceX's Mars Logistics",
    description:
      "A discrete-event simulation (C++ with SIMLIB) of the full Mars logistics chain: rocket assembly, FAA authorization, orbital refueling, and interplanetary transit. Models Starship lifecycle, Super Heavy Boosters, launch pads, tankers, and the 780-day Mars transit window. Configurable parameters for fleet size, payload, and infrastructure. Key findings: delivering 10,000 tons requires ~2.4 years minimum; 3 launch pads and 3 tankers are optimal; Mars window frequency is the main bottleneck. Includes documentation and experimental validation.",
    link: "https://github.com/jkalend/VUT-IMS",
    tags: ["C++", "Simulation", "Simlib"],
    featured: true,
  },
  {
    name: "Serverless Time-Series Anomaly Prediction",
    description:
      "Cloud telemetry anomaly detection using the IBM Cloud dataset, designed for eventual AWS Lambda deployment. Uses DuckDB for out-of-core aggregation (413M rows → ~40 features), a Kinesis-style streamer for local simulation, and Chronos-Bolt or rolling statistics for forecasting. A LogisticRegression anomaly head is trained on forecast errors or rolling stats, then used in streaming inference with a 96-step context window. Targets ≥80% recall with threshold tuning. Runs on 32GB RAM and RTX 4090, with optional Chronos-2 multivariate and XGBoost classifier support.",
    link: "https://github.com/jkalend/chronos-3-timeseries-experiment",
    tags: ["Python", "PyTorch", "Chronos", "Time Series", "Transfer Learning", "AWS Lambda"],
  },
  {
    name: "Geometric Entropy Across VLM Architectures",
    description:
      "Implements the HEDGE framework to evaluate VLM stability under visual perturbations, measuring embedding-manifold consistency. Supports Qwen2.5-VL, Qwen3-VL (8B/30B), and MedGemma. Includes layer-wise semantic dynamics (LVD, LVS) to trace where hallucinations originate. Evaluates on medical VQA datasets (VQA-RAD, MedHallu) and compares dense-tokenization vs restricted-tokenization architectures. Uses a custom transformers-based inference pipeline for Windows (vLLM-free). Metrics: Semantic Entropy, RadFlag, VASE, and optional Ollama-based hallucination judging.",
    link: "https://github.com/jkalend/geometric_entropy_VLM_architectures",
    tags: ["Python", "PyTorch", "Vision-Language Models", "HEDGE", "Medical VQA"],
  },
  {
    name: "Confidence-Weighted Curriculum Learning for Synthetic RL",
    description:
      "Test-time RL adaptation using synthetic entity labels from LLMs (Qwen, Llama) with a confidence-based curriculum. Pipeline: generate labels with crash-resilient output, train with curriculum GRPO, evaluate source/target F1. Uses GRPO + Unsloth + QLoRA for memory-efficient training on a single RTX 4090 (24GB). Supports multi-model label generation and resume for interrupted runs. Designed for single-GPU experimentation with stronger adaptation strategies.",
    link: "https://github.com/jkalend/RL_confidence_weighted",
    tags: ["Python", "PyTorch", "RL", "GRPO", "QLoRA"],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
