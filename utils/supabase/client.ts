import { createBrowserClient } from "@supabase/ssr";

export const createClient = () =>
  createBrowserClient(
    "https://liweklvhzzjhudznqjbj.supabase.co"!,
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxpd2VrbHZoenpqaHVkem5xamJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY5ODA1NTQsImV4cCI6MjAzMjU1NjU1NH0.QRbhEeBqA1bSriSOGsHj8_6OEnmhZdqVtqh_zqWkty4"!,
  );
