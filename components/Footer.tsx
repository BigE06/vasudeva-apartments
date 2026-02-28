import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-semibold text-gray-900">{site.name}</div>
            <div className="text-sm text-gray-600">{site.locationLine}</div>
          </div>
          <div className="text-sm text-gray-500">© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
