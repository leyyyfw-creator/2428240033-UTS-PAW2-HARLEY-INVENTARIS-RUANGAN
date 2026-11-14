# UTS PAW2 — Inventaris Ruangan

REST API untuk mengelola inventaris barang berdasarkan ruangan.

## Model Item
- `item_name` (String, wajib)
- `quantity` (Number, wajib, minimal 0)
- `room` (String, wajib)
- `condition` (String: `Baik`, `Rusak Ringan`, atau `Rusak Berat`)

## Teknologi
Node.js, Express, MongoDB (Mongoose), dan Postman.

## Menjalankan aplikasi
1. Install Node.js dan siapkan MongoDB lokal atau MongoDB Atlas.
2. Clone repository, lalu jalankan:
   ```bash
   npm install
   ```
3. Salin `.env.example` menjadi `.env`, lalu sesuaikan `MONGODB_URI`.
4. Jalankan:
   ```bash
   npm start
   ```
5. API aktif di `http://localhost:3000`.

## Endpoint API
| Method | Endpoint | Fungsi |
|---|---|---|
| GET | `/api/items` | Menampilkan semua item |
| POST | `/api/items` | Menambahkan item |
| GET | `/api/items/:id` | Detail item |
| PUT | `/api/items/:id` | Memperbarui item |
| DELETE | `/api/items/:id` | Menghapus item |

## Contoh body POST/PUT
```json
{
  "item_name": "Proyektor",
  "quantity": 2,
  "room": "Lab SI",
  "condition": "Baik"
}
```

## Pengujian Postman
Import file:
- `postman/Inventaris-Ruangan.postman_collection.json`
- `postman/Inventaris-Ruangan.postman_environment.json`

Pilih environment **Local Inventaris**. Atur `itemId` dengan ID dari respons POST sebelum menjalankan request detail, update, dan delete.
