export default function PricingPage() {
  const plans = [
    {
      name: "Basic",
      price: "$14.99",
      button: "outline",
      features: [
        { text: "Free Setup", active: true },
        { text: "Bandwidth Limit 10 GB", active: true },
        { text: "20 User Connection", active: true },
        { text: "Analytics Report", active: false },
        { text: "Public API Access", active: false },
        { text: "Plugins Integration", active: false },
        { text: "Custom Content Management", active: false }
      ]
    },
    {
      name: "Standard",
      price: "$49.99",
      button: "outline",
      features: [
        { text: "Free Setup", active: true },
        { text: "Bandwidth Limit 10 GB", active: true },
        { text: "20 User Connection", active: true },
        { text: "Analytics Report", active: true },
        { text: "Public API Access", active: true },
        { text: "Plugins Integration", active: false },
        { text: "Custom Content Management", active: false }
      ]
    },
    {
      name: "Premium",
      price: "$89.99",
      button: "filled",
      features: [
        { text: "Free Setup", active: true },
        { text: "Bandwidth Limit 10 GB", active: true },
        { text: "20 User Connection", active: true },
        { text: "Analytics Report", active: true },
        { text: "Public API Access", active: true },
        { text: "Plugins Integration", active: true },
        { text: "Custom Content Management", active: true }
      ]
    }
  ];

  return (
   <div className="w-full max-w-[1300px] mx-auto px-4 text-gray-800 dark:text-white">
      <h1 className="text-2xl font-bold ">Pricing</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`w-full rounded-2xl border flex flex-col transition-all duration-300
bg-white dark:bg-[#1e293b]
border-gray-100 dark:border-gray-700
hover:shadow-lg hover:-translate-y-1
${plan.name === "Premium" ? "ring-2 ring-blue-500 scale-105" : ""}
`}
          >
            <div className="px-10 pt-10 pb-6 text-center">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">{plan.name}</h2>
              <p className="text-gray-400 dark:text-gray-400 text-sm">Monthly Charge</p>
              <h1 className="text-4xl font-bold text-blue-500 mt-6">
                {plan.price}
              </h1>
            </div>

            <hr className="border-gray-200 dark:border-gray-700" /> 

            <ul className="flex-1 px-8 py-8 space-y-4 text-center">
              {plan.features.map((feature, index) => (
                <li
                  key={index}
                  className={`text-sm ${
                    feature.active
                      ?  "text-gray-700 dark:text-gray-200 font-medium"
                      : "text-gray-300 dark:text-gray-500 line-through"
                  }`}
                >
                  {feature.text}
                </li>
              ))}
            </ul>

            <hr className="border-gray-200 dark:border-gray-700" />

            <div className="px-10 py-8 text-center">
              {plan.button === "filled" ? (
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-full w-full transition">
                  Get Started
                </button>
              ) : (
                <button className="border border-blue-500 text-blue-500 py-3 rounded-full w-full hover:bg-blue-500 hover:text-white transition">
                  Get Started
                </button>
              )}

              <p className="text-xs text-gray-400 dark:text-gray-400 mt-4">
                Start Your 30 Day Free Trial
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}