declare module "max-api" {
	type JSONPrimitive = string | number | boolean | null;
	type JSONValue = JSONPrimitive | JSONObject | JSONArray;
	type JSONObject = { [member: string]: JSONValue };
	interface JSONArray extends Array<JSONValue> {}
	export type MaxFunctionHandler = (...args: any[]) => void;
	export type MaxMessageType = "all" | "bang" | "dict" | "number" | "list";
	export type MaxPostLevel = "error" | "info" | "warn";


	type MaxDictIdentifier = string;
	type MaxDictPath = string;

	// Dictionaries
	export function getDict(id: MaxDictIdentifier): Promise<JSONObject>;
	export function setDict(id: MaxDictIdentifier, dict: JSONObject): Promise<JSONObject>;
	export function updateDict(id: MaxDictIdentifier, updatePath: MaxDictPath, updateValue: JSONValue): Promise<JSONObject>;

	// Handlers
	export function addHandler(selector: string, callback: MaxFunctionHandler): void;
	export function addHandlers(handlers: {[selector: string]: MaxFunctionHandler}): void;
	export function removeHandler(selector: string, callback: MaxFunctionHandler): void;
	export function removeHandlers(selector: string): void;

	// Outlet/Post
	export function outlet(...args: JSONValue[]): Promise<null>;
	export function outletBang(): Promise<null>;
	export function post(...args: any[]): Promise<null>;

	// Lifecycle
	export function close(): Promise<null>;
	export function destroy(): Promise<null>;
	export function listen(): Promise<JSONObject>;
}
