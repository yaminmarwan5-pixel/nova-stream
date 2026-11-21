import { useState } from "react";

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState("12 شهراً");
  const whatsappNumber = "212760107905";

  const plans = [
    {
      name: "شهر واحد",
      price: "$9.99",
      features: ["جودة 4K و FHD", "أكثر من 10,000 قناة", "دعم فني متواصل"],
    },
    {
      name: "6 أشهر",
      price: "$39.99",
      features: ["جودة 4K و FHD", "مكتبة أفلام ومسلسلات", "دعم فني متواصل"],
    },
    {
      name: "12 شهراً",
      price: "$64.99",
      features: ["الأكثر طلباً وتوفيراً", "جودة 4K بدون تقطيع", "تجربة مجانية قبل الدفع"],
    },
  ];

  const steps = [
    {
      step: "1",
      title: "اختر الباقة أو اطلب تجربة",
      desc: "حدد الباقة المناسبة لك أو اطلب تجربة مجانية للتأكد من الجودة والاستقرار.",
    },
    {
      step: "2",
      title: "استلم بيانات التفعيل",
      desc: "نرسل لك عبر واتساب بيانات Xtream (اسم المستخدم، كلمة المرور، والرابط) أو رابط M3U.",
    },
    {
      step: "3",
      title: "أدخل البيانات في التطبيق",
      desc: "افتح التطبيق على جهازك، أدخل بيانات التفعيل، وابدأ المشاهدة فوراً.",
    },
  ];

  const apps = [
    "IPTV Smarters Pro",
    "IBO Player",
    "TiviMate",
    "Flix IPTV",
  ];

  const openWhatsApp = (message) => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div dir="rtl" className="min-h-screen bg-slate-950 text-white font-sans">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/70 backdrop-blur">
        <div className="text-2xl font-extrabold tracking-wide text-cyan-400">
          NOVA STREAM
        </div>
        <div className="flex gap-4 text-sm text-slate-300">
          <a href="#features" className="hover:text-cyan-400 transition">المميزات</a>
          <a href="#how-it-works" className="hover:text-cyan-400 transition">طريقة التشغيل</a>
          <a href="#plans" className="hover:text-cyan-400 transition">الباقات</a>
          <a href="#contact" className="hover:text-cyan-400 transition">تواصل معنا</a>
        </div>
      </nav>

      <header className="px-6 py-20 text-center max-w-3xl mx-auto">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
          بث مباشر عالي الجودة
        </span>
        <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
          مرحباً بك في <span className="text-cyan-400">Nova Stream</span>
        </h1>
        <p className="text-slate-400 text-lg leading-relaxed mb-8">
          استمتع بمشاهدة أحدث القنوات الرياضية، الأفلام، والمسلسلات بجودة عالية واستقرار ممتاز على جميع أجهزتك.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#plans"
            className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition"
          >
            استعرض الباقات
          </a>
          <button
            onClick={() =>
              openWhatsApp("مرحباً Nova Stream، أرغب في طلب تجربة مجانية قبل الاشتراك.")
            }
            className="px-6 py-3 rounded-xl border border-slate-700 hover:border-cyan-400 text-white font-semibold transition"
          >
            اطلب تجربة الآن
          </button>
        </div>
      </header>

      <section id="features" className="px-6 py-12 max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
          <h3 className="text-lg font-bold text-cyan-400 mb-2">سرعة واستقرار</h3>
          <p className="text-slate-400 text-sm">خوادم مخصصة لتقليل التقطيع وضمان بث مستمر خلال المباريات الكبرى.</p>
        </div>
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
          <h3 className="text-lg font-bold text-cyan-400 mb-2">توافق شامل</h3>
          <p className="text-slate-400 text-sm">يعمل على الهواتف الذكية، التلفاز الذكي، الكمبيوتر، وأجهزة البث.</p>
        </div>
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
          <h3 className="text-lg font-bold text-cyan-400 mb-2">تحديث مستمر</h3>
          <p className="text-slate-400 text-sm">إضافة مستمرة للقنوات والمحتوى الجديد لتجربة مشاهدة متجددة.</p>
        </div>
      </section>

      <section id="how-it-works" className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-4">طريقة التشغيل والتفعيل</h2>
        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-10 text-sm">
          التفعيل سريع ومباشر عبر تطبيقات المشاهدة المعروفة باستخدام بيانات Xtream أو رابط M3U.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {steps.map((item) => (
            <div key={item.step} className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 font-bold flex items-center justify-center mb-4">
                {item.step}
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 text-center">
          <h3 className="text-base font-bold text-cyan-400 mb-4">تطبيقات شائعة متوافقة مع الخدمة</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {apps.map((appName) => (
              <span
                key={appName}
                className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200"
              >
                {appName}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="plans" className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-10">باقات الاشتراك</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => {
            const active = selectedPlan === plan.name;
            return (
              <div
                key={plan.name}
                onClick={() => setSelectedPlan(plan.name)}
                className={`cursor-pointer p-6 rounded-2xl border transition ${
                  active
                    ? "bg-slate-900 border-cyan-400 shadow-lg shadow-cyan-500/10"
                    : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
                }`}
              >
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-black text-cyan-400 mb-4">{plan.price}</div>
                <ul className="space-y-2 text-sm text-slate-300 mb-6">
                  {plan.features.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPlan(plan.name);
                    openWhatsApp(
                      `مرحباً Nova Stream، أرغب في الاشتراك في باقة (${plan.name}) بسعر ${plan.price}.`
                    );
                  }}
                  className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition"
                >
                  {active ? "اشترك في الباقة المحددة" : "اختيار الباقة"}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      <footer id="contact" className="px-6 py-8 border-t border-slate-800 text-center text-slate-400 text-sm space-y-2">
        <div>
          <button
            onClick={() => openWhatsApp("مرحباً Nova Stream، أحتاج إلى مساعدة أو استفسار.")}
            className="text-cyan-400 hover:underline font-semibold"
          >
            تواصل معنا عبر واتساب
          </button>
        </div>
        <div>© {new Date().getFullYear()} Nova Stream — جميع الحقوق محفوظة.</div>
      </footer>
    </div>
  );
}
