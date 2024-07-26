"use client";
import { useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { ThemeSupa, ViewType } from "@supabase/auth-ui-shared";
import { Auth } from "@supabase/auth-ui-react";
import Image from "next/image";
import Link from "next/link";

const supabase = createClient();

const views: { id: ViewType; title: string }[] = [
  { id: "sign_in", title: "Sign In" },
  { id: "sign_up", title: "Sign Up" },
  { id: "magic_link", title: "Magic Link" },
  { id: "forgotten_password", title: "Forgotten Password" },
  { id: "update_password", title: "Update Password" },
  { id: "verify_otp", title: "Verify Otp" },
];
const localization = {
  variables: {
    sign_up: {
      email_label: "Email",
      password_label: "Parola",
      email_input_placeholder: "Adresa ta de email",
      password_input_placeholder: "Parola ta",
      button_label: "Inregistreaza-te",
      loading_button_label: "Se incarca ...",
      link_text: "Nu aveți încă un cont? Înregistrați-vă",
    },
    sign_in: {
      email_label: "Email",
      email_input_placeholder: "Adresa ta de email",
      password_label: "Parola",
      password_input_placeholder: "Parola ta",
      button_label: "Autentifica-te",
      loading_button_label: "Se incarca ...",
      link_text: "Aveți deja un cont? Conectați-vă",
    },
    forgotten_password: {
      email_label: "Email",
      password_label: "IParola",
      email_input_placeholder: "Adresa ta de email",
      button_label: "Trimiteți instrucțiuni pentru resetarea parolei",
      loading_button_label: "Se incarca ...",
      link_text: "Ați uitat parola?",
    },
  },
};

export default function Login() {
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session) {
          window.location.href = "/";
        }
      },
    );

    // Cleanup function to unsubscribe the listener
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <div className="relative bg-zinc-900 lg:mx-auto lg:max-w-md">
      <div className="min-w-[300px]">
        <div className="border-scale-400 bg-scale-300 relative rounded-xl px-8 py-10 drop-shadow-sm">
          <div className="mb-6 flex flex-col gap-6">
            <div className="flex flex-col items-center gap-3">
              <Link href="/">
                <Image
                  src="/upb.png"
                  alt="Logo Politehnica"
                  width={100}
                  height={100}
                ></Image>
              </Link>

              <h1 className="text-scale-1200 mt-2 text-center text-2xl text-white">
                Universitatea Politehnica Bucuresti
              </h1>
            </div>
          </div>
          <Auth
            supabaseClient={supabase}
            redirectTo="/dashboard"
            view={views[0].id}
            appearance={{
              theme: ThemeSupa,
              style: {
                button: {
                  borderRadius: "10px",
                  borderColor: "rgba(0,0,0,0)",
                },
              },
              variables: {
                default: {
                  colors: {
                    brand: "rgb(8, 107, 177)",
                    brandAccent: `gray`,
                  },
                },
              },
            }}
            providers={["apple", "google", "github"]}
            socialLayout={"horizontal"}
            theme={"dark"}
            localization={localization}
          />
        </div>
      </div>
    </div>
  );
}
