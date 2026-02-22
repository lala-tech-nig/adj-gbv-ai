"use client";

import { ReportProvider } from "./ReportContext";

export default function ReportLayout({ children }) {
    return <ReportProvider>{children}</ReportProvider>;
}
