// import "cross-fetch/polyfill";
import { server } from "./server";

beforeAll(() => server.listen());

afterAll(() => server.close());
