import { type RouteConfig, index, route } from "@react-router/dev/routes";

[index("routes/home.tsx")] satisfies RouteConfig;
export default [
    index("routes/home.tsx"),
    route("playground", "./routes/playground.tsx"),
] satisfies RouteConfig;