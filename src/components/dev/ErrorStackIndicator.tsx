import { useErrorStack } from "@config/providers/ErrorManagerProvider";

export const ErrorStackIndicator = () => {
  const errors = useErrorStack();

  if (errors.length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-destructive text-destructive-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs shadow-lg z-50">
      {errors.length}
    </div>
  );
};