import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" dir="rtl">
      {/* العنوان */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 leading-snug">
  محل <span className="text-blue-600">تبريد وتكييف</span> بحائل
</h1>

<p className="text-lg sm:text-xl text-gray-700 text-center mb-6">
  تواصل مع نايف عنبر صيانة تبريد وتكييف – خدمات التكييف في مدينة حائل
</p>


      {/* المقدمة */}
      <p className="text-base sm:text-lg text-gray-700 mb-10 text-center sm:text-right leading-relaxed">
        لديك أسئلة أو تحتاج إلى <strong>خدمات تكييف في مدينة حائل</strong>؟  
        فريقنا جاهز لمساعدتك سواء كنت تحتاج إلى{" "}
        <strong>صيانة مكيفات الشباك</strong>، صيانة شاملة أو إصلاحات طارئة.
      </p>

      {/* معلومات الاتصال */}
      <div className="bg-blue-50 p-6 rounded-xl shadow-md mb-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-right">
        {/* الهاتف */}
        <div>
          <h2 className="font-semibold text-lg mb-1">اتصل بنا</h2>
          <a
            href="tel:+966503570189"
            className="text-blue-600 hover:underline block"
            dir="ltr"
          >
            +966 50 357 0189
          </a>
        </div>

        {/* الواتساب */}
        <div>
          <h2 className="font-semibold text-lg mb-1">واتساب</h2>
          <a
            href="https://wa.me/966552093474?text=مرحبا"
            className="text-green-600 hover:underline block"
            dir="ltr"
          >
            966552093474
          </a>
        </div>

        {/* الموقع */}
        <div>
          <h2 className="font-semibold text-lg mb-1">زورونا</h2>
          <a
            href="https://www.google.com/maps/place/27%C2%B030'11.9%22N+41%C2%B040'54.1%22E/@27.5034561,41.6809884,18z"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline block"
          >
            مدينة حائل، المملكة العربية السعودية
          </a>
        </div>
      </div>

      {/* خريطة جوجل */}
      <div className="mb-10 w-full h-72 sm:h-96 rounded-lg overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3629.7628259189437!2d41.68098841502413!3d27.503456079035744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDMwJzExLjkiTiA0McKwNDAnNTQuMSJF!5e0!3m2!1sar!2ssa!4v1695359999999!5m2!1sar!2ssa"
          width="100%"
          height="100%"
          className="rounded-lg"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* نموذج التواصل */}
      <div className="bg-gray-50 p-8 rounded-xl shadow-md mb-10">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center sm:text-right">
          أرسل لنا رسالة
        </h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="الاسم"
            className="p-3 border border-gray-300 rounded-lg w-full"
            required
          />
          <input
            type="email"
            placeholder="البريد الإلكتروني"
            className="p-3 border border-gray-300 rounded-lg w-full"
            required
          />
          <input
            type="tel"
            placeholder="رقم الهاتف"
            className="p-3 border border-gray-300 rounded-lg w-full"
            dir="ltr"
            required
          />
          <textarea
            placeholder="رسالتك"
            className="p-3 border border-gray-300 rounded-lg w-full"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full sm:w-auto mx-auto"
          >
            إرسال الرسالة
          </button>
        </form>
      </div>

      {/* دعوة للتواصل */}
      <div className="p-8 bg-blue-100 rounded-xl shadow-md text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
          احصل على خدمة التكييف الخاصة بك اليوم!
        </h2>
        <p className="text-gray-700 mb-6 text-base sm:text-lg">
          اتصل بنا أو راسلنا على الواتساب للحصول على خدمات تكييف سريعة وموثوقة في
          مدينة حائل.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="tel:+966503570189"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            dir="ltr"
          >
            اتصل الآن
          </a>
          <a
            href="https://wa.me/966552093474?text=مرحبا"
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
            dir="ltr"
          >
            واتساب
          </a>
        </div>
      </div>
    </div>
  );
}
