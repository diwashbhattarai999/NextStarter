import { CheckCircle2 } from "lucide-react";

interface FormSuccessProps {
  message?: string;
}

const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;

  return (
    <div className="w-full bg-success p-3 my-4 rounded-md flex items-center gap-x-2 font-semibold text-success-foreground">
      <CheckCircle2 className="h-5 w-5" />
      <p>{message}</p>
    </div>
  );
};

export default FormSuccess;
