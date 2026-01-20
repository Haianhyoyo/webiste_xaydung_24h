import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

const DATA_DIR = path.join(process.cwd(), 'data');
const CONTACTS_FILE = path.join(DATA_DIR, 'contacts.json');

async function ensureDataFile() {
    try {
        await fs.mkdir(DATA_DIR, { recursive: true });
        try {
            await fs.access(CONTACTS_FILE);
        } catch {
            await fs.writeFile(CONTACTS_FILE, '[]', 'utf8');
        }
    } catch (err) {
        console.error('Failed to ensure data file', err);
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, message, service } = body;

        if (!name || (!email && !phone) || !message) {
            return NextResponse.json({ error: 'Missing fields: name, message and email or phone required' }, { status: 400 });
        }

        await ensureDataFile();

        let contacts = [];
        try {
            const fileContent = await fs.readFile(CONTACTS_FILE, 'utf8');
            contacts = JSON.parse(fileContent || '[]');
        } catch {
            contacts = [];
        }

        const newContact = {
            id: Date.now(),
            name,
            email: email || null,
            phone: phone || null,
            service: service || null,
            message,
            createdAt: new Date().toISOString()
        };

        contacts.push(newContact);

        await fs.writeFile(CONTACTS_FILE, JSON.stringify(contacts, null, 2), 'utf8');

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
