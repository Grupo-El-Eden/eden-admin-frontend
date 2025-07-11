export function findDataType(text: string ) {
  return {
    type: (() => {
      const trimmed = text.trim();
      if (trimmed.startsWith("{") || trimmed.startsWith("[")) {
        try {
          JSON.parse(trimmed);
          return "JSON";
        } catch {
          // Not valid JSON, continue checking
        }
      }
      if (/<\/?[a-z][\s\S]*>/i.test(text)) {
        return "HTML";
      }
      return "unknown";
    })()
  }
}