import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "100px" }}>
      <SignIn />
    </div>
  );
}

