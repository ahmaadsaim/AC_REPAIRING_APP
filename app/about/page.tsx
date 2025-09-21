import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-right" dir="rtl">
      {/* العنوان */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6">
        عن نايف عنبر صيانة تبريد وتكييف – أفضل خدمات التكييف في مدينة حائل
      </h1>

      {/* فقرة المقدمة */}
      <p className="text-base sm:text-lg text-gray-700 mb-6 text-center sm:text-right leading-relaxed">
        نايف عنبر صيانة تبريد وتكييف يقدم خدمات موثوقة واحترافية في مدينة حائل منذ سنوات.
        من <strong>صيانة المكيفات الشباك</strong> إلى التركيب والصيانة الكاملة،
        نضمن أن يعمل كل جهاز بكفاءة عالية. مهمتنا هي توفير الراحة في منزلك ومكتبك طوال العام.
      </p>

      {/* معرض الصور */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <Image
          src="/image1.jpeg"
          alt="صورة متجر نايف عنبر صيانة تبريد وتكييف 1"
          width={400}
          height={300}
          className="w-full h-64 sm:h-60 md:h-64 lg:h-72 rounded-lg object-cover"
        />
        <Image
          src="/image2.jpeg"
          alt="صورة متجر نايف عنبر صيانة تبريد وتكييف 2"
          width={400}
          height={300}
          className="w-full h-64 sm:h-60 md:h-64 lg:h-72 rounded-lg object-cover"
        />
        <Image
          src="/image3.jpeg"
          alt="صورة متجر نايف عنبر صيانة تبريد وتكييف 3"
          width={400}
          height={300}
          className="w-full h-64 sm:h-60 md:h-64 lg:h-72 rounded-lg object-cover"
        />
      </div>

      {/* الوصف التفصيلي */}
      <p className="text-gray-700 mb-4 text-base sm:text-lg leading-relaxed">
        فريقنا مدرّب على أعلى مستوى ويستخدم أحدث المعدات لتقديم خدمات صيانة بجودة عالية.
        سواء كنت تبحث عن <strong>خدمة تكييف قريبة مني</strong> أو تحتاج إلى إصلاحات عاجلة،
        نحن جاهزون لمساعدتك. رضا العملاء هو أولويتنا، ونتأكد من أن كل خدمة تتم بسرعة
        وموثوقية وبأسعار مناسبة.
      </p>

      <p className="text-gray-700 mb-6 text-base sm:text-lg leading-relaxed">
        زورونا في متجرنا بمدينة حائل، أو تواصلوا معنا مباشرة لأي استفسارات:
      </p>

      {/* معلومات الاتصال */}
      <div className="bg-blue-100 p-4 rounded-lg flex flex-col sm:flex-row justify-between items-center mb-6 gap-4 sm:gap-0 text-center sm:text-right">
        <div>
          <strong>اتصل بنا:</strong>{" "}
          <a href="tel:+966503570189" className="text-blue-600">+966 50 357 0189</a>
        </div>
        <div>
          <strong>واتساب:</strong>{" "}
          <a href="https://wa.me/966552093474?text=مرحبا" className="text-green-600">966552093474</a>
        </div>
        <div>
          <strong>الموقع:</strong>{" "}
          <a
            href="https://www.google.com/maps/place/27%C2%B030'11.9%22N+41%C2%B040'54.1%22E/@27.5032978,41.6791306,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            عرض على الخريطة
          </a>
        </div>
      </div>

      {/* الدعوة للتواصل */}
      <div className="mt-8 p-6 bg-blue-50 rounded-lg text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
          تواصل مع نايف عنبر صيانة تبريد وتكييف اليوم!
        </h2>
        <p className="text-gray-700 mb-4 text-base sm:text-lg leading-relaxed">
          اتصل بنا أو راسلنا على الواتساب للحصول على أفضل خدمات التكييف في مدينة حائل.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="tel:+966503570189" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition w-full sm:w-auto text-center">اتصل الآن</a>
          <a href="https://wa.me/966552093474?text=مرحبا" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition w-full sm:w-auto text-center">واتساب</a>
        </div>
      </div>
    </div>
  );
}
