// Data single outlet Sukaku Fried Chicken
export interface Outlet {
  id: string;
  name: string;
  address: string;
  hours: string;
  phone: string;
  whatsapp: string;
  googleMapsUrl: string;
  gofoodUrl: string;
  grabfoodUrl: string;
  shopeefoodUrl: string;
}

export const STORE: Outlet = {
  id: "sukaku-kopo-serang",
  name: "Sukaku Fried Chicken",
  address: "Jl. Raya Nangela, Nanggung, Kec. Kopo, Kabupaten Serang, Banten 42178",
  hours: "09:00 - 21:00 WIB",
  phone: "0851-7534-8190",
  whatsapp: "6285175348190",
  googleMapsUrl: "https://maps.app.goo.gl/8WUy1RHQPgeSSPVa9",
  gofoodUrl: "https://gofood.co.id",
  grabfoodUrl: "https://grab.com/food",
  shopeefoodUrl: "https://shopee.co.id/shopeefood",
};

// Alias untuk kompatibilitas (CartContext menggunakan OUTLETS[0])
export const OUTLETS: Outlet[] = [STORE];

export const MAIN_CS_WHATSAPP = "6285175348190";
