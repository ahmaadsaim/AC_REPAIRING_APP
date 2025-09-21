// app/services/page.tsx

import ServicesComponent from "@/components/services";

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto p-6" dir="rtl">
      {/* SEO-friendly heading */}
      <h1 className="text-4xl font-bold text-center mb-6">
        أفضل خدمات التكييف في حائل – نايف عنبر صيانة تبريد وتكييف
      </h1>

      {/* Intro paragraph with keywords */}
      <p className="text-lg text-gray-700 mb-4 text-right">
        هل تبحث عن <strong>خدمات تكييف موثوقة في مدينة حائل</strong>؟ نحن نقدم أفضل 
        <strong> خدمات مكيفات الشباك في حائل</strong> مع صيانة احترافية لجميع أنواع المكيفات. 
        فريقنا يضمن أن يعمل مكيفك بكفاءة عالية وبدون مشاكل.
      </p>

      {/* Contact info */}
      <div className="mb-6 bg-blue-100 p-4 rounded-lg flex flex-col md:flex-row justify-between items-center gap-3 text-right">
        <div>
          <strong>اتصل بنا:</strong>{" "}
          <a href="tel:+966503570189" className="text-blue-600">
            +966 50 357 0189
          </a>
        </div>
        <div>
          <strong>واتساب:</strong>{" "}
          <a
            href="https://wa.me/966552093474?text=مرحبا"
            className="text-green-600"
          >
            966552093474
          </a>
        </div>
        <div>
          <strong>الموقع:</strong>{" "}
          <a
            href="https://www.google.com/maps/place/27%C2%B030'11.9%22N+41%C2%B040'54.1%22E/@27.5032978,41.6791306,17z/data=!3m1!4b1!4m4!3m3!8m2!3d27.5032978!4d41.6817055?hl=ar&entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            عرض على الخريطة
          </a>
        </div>
      </div>

      {/* Keywords inclusion */}
      <p className="text-gray-700 mb-6 text-right">
        سواء كنت تبحث عن <strong>خدمة مكيف قريبة مني</strong> أو تحتاج إلى مساعدة 
        احترافية في مكيفات الشباك، نحن هنا لتقديم خدمات سريعة وبأسعار مناسبة في مدينة حائل. 
        فريقنا المتخصص يضمن صيانة جميع وحدات التكييف، إصلاحها، وإعادة تعبئة الفريون بعناية.
      </p>

      {/* Services component */}
      <ServicesComponent />

      {/* Footer call to action */}
      <div className="mt-8 p-6 bg-blue-50 rounded-lg text-center">
        <h2 className="text-2xl font-semibold mb-2">
          تواصل مع نايف عنبر صيانة تبريد وتكييف اليوم!
        </h2>
        <p className="text-gray-700 mb-4">
          اتصل بنا أو راسلنا على الواتساب للحصول على خدمات تكييف فورية في مدينة حائل.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="tel:+966503570189"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            اتصل الآن
          </a>
          <a
            href="https://wa.me/966552093474?text=مرحبا"
            className="px-4 py-2 bg-green-600 text-white rounded-lg"
          >
            واتساب
          </a>
        </div>
      </div>
    </div>
  );
}
