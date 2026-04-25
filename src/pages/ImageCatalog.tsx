const images = [
  "289611374_357942549782506_4544959039348860593_n.jpg",
  "290424164_837025650826313_4865875113411295532_n.jpg",
  "290434322_608060007156187_73918581961655303_n.jpg",
  "290456160_564944241749216_7939236840950059981_n.jpg",
  "290461631_411111827630790_2347344700588687887_n.jpg",
  "290466737_403475581806009_7084288586909982285_n.jpg",
  "290553431_1012830619376562_4941515039546042924_n.jpg",
  "290555297_421935503182882_5685989387358868386_n.jpg",
  "290593573_1802842203257891_7254462805028144449_n.jpg",
  "290630247_1104408083508787_3077392784411264099_n.jpg",
  "290717270_696824048028178_1355845685912088072_n.jpg",
  "290820755_353873290228171_21096874379294813_n.jpg",
  "56 front.jpg",
  "Broadway1.png",
  "Broadway_St-18.jpg",
  "IMG_0063.jpg",
  "IMG_0647.JPG",
  "IMG_0648.JPG",
  "IMG_0649.JPG",
  "IMG_0650.JPG",
  "IMG_0651.JPG",
  "IMG_0652.JPG",
  "IMG_0653.JPG",
  "IMG_0654.JPG",
  "IMG_0655.JPG",
  "IMG_0656.JPG",
  "IMG_0981.jpeg",
  "IMG_0983.jpeg",
  "IMG_0984.jpeg",
  "IMG_0986.jpeg",
  "IMG_1159.jpeg",
  "IMG_1160.jpeg",
  "IMG_1170.jpeg",
  "IMG_1208.jpeg",
  "IMG_1300.jpeg",
  "Me or read.png",
  "Screenshot_20211025-161708_Maps.jpg",
  "Screenshot_20211204-135528_Chrome.jpg",
  "after barb.png",
  "ater char.png",
  "b1.jpeg",
  "bathroom.png",
  "broadmead.jpeg",
  "broadmead.png",
  "broadway 2.png",
  "char.png",
  "chartres1.png",
  "front broadway.jpg",
  "img-1 (1).jpeg",
  "img-1.jpeg",
  "img-12.jpeg",
  "img-13.jpeg",
  "img-15.jpeg",
  "img-17.jpeg",
  "img-2.jpeg",
  "img-20 (1).jpeg",
  "img-20.jpeg",
  "img-22.jpeg",
  "img-25.jpeg",
  "img-27.jpeg",
  "img-3.jpeg",
  "img-31.jpeg",
  "img-33.jpeg",
  "img-38.jpeg",
  "img-4.jpeg",
  "img-41.jpeg",
  "img-44.jpeg",
  "img-45.jpeg",
  "img-47.jpeg",
  "img-7.jpeg",
  "img-8.jpeg",
  "img-9.jpeg",
  "kitchen broadway.jpg",
  "kitchen.png",
  "living room broadway.jpg",
  "living room.jpg",
  "n2.jpeg",
  "outside.png",
  "DSC_9439.jpeg",
  "DSC_9489.jpeg",
  "Alyssa with Children.jpg",
  "DSC_9427.jpeg",
  "SOC Lys.jpg",
  "Alyssa Phillips.jpg",
];

function getRawUrl(filename: string) {
  const encoded = encodeURIComponent(filename);
  return `https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/${encoded}`;
}

export default function ImageCatalog() {
  return (
    <div className="min-h-screen bg-[#F5F1E8] p-6 md:p-12">
      <h1
        className="text-3xl md:text-4xl font-light text-[#1a1200] mb-2"
        style={{ fontFamily: "Cormorant Garamond, serif" }}
      >
        Image Catalog
      </h1>
      <p
        className="text-sm text-[#1a1200]/60 mb-10"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        All photos are numbered. Tell me which number goes where.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {images.map((filename, index) => (
          <div key={filename} className="bg-white rounded-lg overflow-hidden">
            <div className="relative aspect-square bg-[#e8e4db]">
              <img
                src={getRawUrl(filename)}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-2 left-2 bg-[#1a1200] text-[#F5F1E8] text-xs font-bold px-2 py-1 rounded">
                {index + 1}
              </div>
            </div>
            <p
              className="text-[10px] text-[#1a1200]/50 px-2 py-1 truncate"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {filename}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}