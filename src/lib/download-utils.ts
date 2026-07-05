// src/lib/download-utils.ts
import { NextResponse } from 'next/server';
import { stringify } from 'csv-stringify';
import JSZip from "jszip";

/**
 * Generates and streams a SINGLE BIG CSV file.
 * @param data The data to be written to the CSV, including headers.
 * @param filename The desired filename for the download.
 * @returns A NextResponse containing the CSV file.
 */
export async function generateAndStreamCsv(data: any[][], filename: string): Promise<NextResponse> {
  const csvString = await new Promise<string>((resolve, reject) => {
    stringify(data, (err, result) => {
      if (err) reject(err);
      resolve(result || '');
    });
  });

  return new NextResponse(csvString, {
    status: 200,
    headers: {
      'Content-Type': 'text/csv',
      'Content-Disposition': `attachment; filename="${filename}"`,
    },
  });
}

// Create a ZIP containing multiple CSVs
export async function exportTablesToCSVZip(
  dataByTable: { table: string; columns: string[]; rows: any[] }[]
): Promise<Blob> {
  const zip = new JSZip();

  dataByTable.forEach(({ table, columns, rows }) => {
    const csvContent = toCSV(columns, rows);
    zip.file(`${table}.csv`, csvContent);
  });

  const blob = await zip.generateAsync({ type: "blob" });
  return blob;
}

// CSV helpers
// Convert rows to CSV string
function toCSV(columns: string[], rows: any[]): string {
  const header = columns.join(",");
  const csvRows = rows.map(row =>
    columns.map(col => JSON.stringify(row[col] ?? "")).join(",")
  );
  return [header, ...csvRows].join("\n");
}