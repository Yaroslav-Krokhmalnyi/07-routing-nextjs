//app/notes/[id]/error.tsx

"use client";

// Types
type ErrorProps = {
  error: Error;
};

const Error = ({ error }: ErrorProps) => {
  return (
    <div>
      <h2>Помилка при завантаженні</h2>
      <p>{error.message}</p>
    </div>
  );
}

export default Error;
