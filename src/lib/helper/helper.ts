export default function IsNullOrEmpty(value: any): boolean {
    if (
        value === null ||
        value === undefined ||
        (typeof value === "number" && value === 0) ||
        (typeof value === "string" && value === "") ||
        (typeof value === "object" && Object.keys(value).length === 0)
    ) {
        return true;
    }

    return false;
}
