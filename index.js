function submitData(name, email) {
    // تعريف البيانات التي سيتم إرسالها
    const formData = {
      name: name,
      email: email,
    };
  
    // إعداد كائن التكوين لطلب POST
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(formData),
    };
  
    // إرسال طلب POST باستخدام fetch
    return fetch("http://localhost:3000/users", configurationObject)
      .then(function (response) {
        return response.json(); // تحويل استجابة الخادم إلى كائن جافاسكربت
      })
      .then(function (object) {
        // استرجاع قيمة الـ id من الاستجابة وإضافتها إلى الـ DOM
        const newElement = document.createElement("p");
        newElement.textContent = object.id;
        document.body.appendChild(newElement);
      })
      .catch(function (error) {
        // التعامل مع أي أخطاء تحدث أثناء الطلب وعرض رسالة الخطأ في الـ DOM
        const errorElement = document.createElement("p");
        errorElement.textContent = error.message;
        document.body.appendChild(errorElement);
      });
  }
  