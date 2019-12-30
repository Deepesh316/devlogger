import { get } from "lodash";
import pino, { Logger } from "pino";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

/**
 * default: info 30
 * trace 10
 * debug 20
 * warn 40
 * error 50
 * silent
 * fatal 60
 */

const DEFAULT_LOG_LEVEL = process.env.NODE_ENV === "test" ? "silent" : "info";
const logger: Logger = pino({
  name: get(process, "env.APP_ID", "NO_APP_DEFINED"),
  level: get(process, "env.LOG_LEVEL", DEFAULT_LOG_LEVEL),
  customLevels: {
    userInfo: 70
  },
  timestamp: () => `,"time":"${new Date().toISOString()}"`,
  useLevelLabels: true
});

export default logger;
