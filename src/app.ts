import * as root from "app-root-path";
import * as compression from "compression";
import * as express from "express";
import * as ParseDashboard from "parse-dashboard";
import { ParseServer } from "parse-server";
import * as path from "path";
import aboutUs from "./routes/about-us";
import contact from "./routes/contact";
import home from "./routes/home";
import project from "./routes/project";
import {
  PARSE_DASHBOARD_OPTIONS,
  PARSE_DASHBOARD_PROPERTY,
  PARSE_SERVER_PROPERTY,
} from "./settings/parse";

const app = express();

// compress responses
app.use(compression());

app.use(express.static(path.join(`${root}`, "public")));

const api = new ParseServer(PARSE_SERVER_PROPERTY);
const dashboard = new ParseDashboard(
  PARSE_DASHBOARD_PROPERTY,
  PARSE_DASHBOARD_OPTIONS,
);

// Serve the Parse API on the /parse URL prefix
app.use("/api", api);

// make the Parse Dashboard available at /dashboard
app.use("/dashboard", dashboard);

// view engine setup
app.set("views", path.join(`${root}`, "views"));
app.set("view engine", "ejs");

app.use("/", home);
app.use("/", project);
app.use("/", aboutUs);
app.use("/", contact);

export default app;
