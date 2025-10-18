// بيانات التطبيقات المخزنة
const appsData = [
    {
        name: "ChatGPT",
        company: "OpenAI",
        category: "Education",
        pricing: "مجاني",
        website: "https://chat.openai.com",
        description: "ChatGPT هو روبوت محادثة ذكي يستخدم الذكاء الاصطناعي للرد على الأسئلة والمساعدة في المهام المختلفة.",
        logo: "🖼️ شعار ChatGPT",
        audio: "🔊 ملف صوتي توضيحي",
        video: "🎬 فيديو تعريفي"
    },
    {
        name: "Midjourney",
        company: "Midjourney Inc",
        category: "Design",
        pricing: "غير مجاني",
        website: "https://www.midjourney.com",
        description: "أداة ذكاء اصطناعي متقدمة لإنشاء الصور الفنية والرسومات من خلال الأوصاف النصية.",
        logo: "🖼️ شعار Midjourney",
        audio: "🔊 ملف صوتي توضيحي", 
        video: "🎬 فيديو تعريفي"
    },
    {
        name: "Google Bard",
        company: "Google",
        category: "Education",
        pricing: "مجاني",
        website: "https://bard.google.com",
        description: "مساعد ذكي من جوجل يعتمد على الذكاء الاصطناعي للمساعدة في الإبداع وحل المشكلات.",
        logo: "🖼️ شعار Google Bard",
        audio: "🔊 ملف صوتي توضيحي",
        video: "🎬 فيديو تعريفي"
    },
    {
        name: "Alexa",
        company: "Amazon",
        category: "E-Commerce",
        pricing: "مجاني",
        website: "https://developer.amazon.com/alexa",
        description: "مساعد افتراضي ذكي للتحكم بالمنزل الذكي والتسوق عبر الإنترنت.",
        logo: "🖼️ شعار Alexa",
        audio: "🔊 ملف صوتي توضيحي",
        video: "🎬 فيديو تعريفي"
    },
    {
        name: "IBM Watson",
        company: "IBM", 
        category: "Healthcare",
        pricing: "غير مجاني",
        website: "https://www.ibm.com/watson",
        description: "منصة ذكاء اصطناعي متقدمة للمؤسسات تحلل البيانات الضخمة لاتخاذ قرارات أفضل.",
        logo: "🖼️ شعار IBM Watson",
        audio: "🔊 ملف صوتي توضيحي",
        video: "🎬 فيديو تعريفي"
    }
];

// دالة التهيئة عند تحميل الصفحة
$(document).ready(function() {
    console.log("✅ تم تحميل الموقع - SmartScope");
    
    if (window.location.href.indexOf('apps.html') > -1) {
        initAppsPage();
    }
});

// تهيئة صفحة التطبيقات
function initAppsPage() {
    console.log("🔄 بدء تهيئة صفحة التطبيقات");
    
    // تحميل التطبيقات المخزنة
    loadStoredApps();
    
    // تهيئة الأحداث بعد تحميل الصفحة
    setTimeout(function() {
        initAppEvents();
    }, 100);
}

// تهيئة أحداث التطبيقات
function initAppEvents() {
    console.log("🔗 تهيئة أحداث checkboxes");
    
    // حدث checkboxes
    $(document).on('change', '.show-details', function() {
        const appIndex = parseInt($(this).data('app'));
        const isChecked = $(this).is(':checked');
        
        console.log(`📱 تطبيق ${appIndex} - ${isChecked ? 'مفعل' : 'غير مفعل'}`);
        
        if (isChecked) {
            $('.app-details-row').remove();
            showAppDetails(appIndex, $(this).closest('tr'));
        } else {
            $('#app-details-' + appIndex).remove();
        }
    });
    
    // أزرار التحكم
    $('#showAllDetails').click(showAllDetails);
    $('#hideAllDetails').click(hideAllDetails);
    
    console.log("✅ تم تهيئة جميع الأحداث");
}

// إظهار تفاصيل التطبيق
function showAppDetails(appIndex, row) {
    if (appIndex < 0 || appIndex >= appsData.length) {
        console.error('❌ رقم التطبيق غير صحيح');
        return;
    }
    
    const app = appsData[appIndex];
    const detailsId = 'app-details-' + appIndex;
    
    const detailsHTML = `
        <tr id="${detailsId}" class="app-details-row">
            <td colspan="5">
                <div class="app-details-content">
                    <h3>📱 ${app.name}</h3>
                    <div class="details-grid">
                        <div class="detail-item">
                            <strong>🌐 الموقع:</strong>
                            <a href="${app.website}" target="_blank">${app.website}</a>
                        </div>
                        <div class="detail-item">
                            <strong>🏢 الشركة:</strong>
                            <p>${app.company}</p>
                        </div>
                        <div class="detail-item">
                            <strong>📊 المجال:</strong>
                            <p>${app.category}</p>
                        </div>
                        <div class="detail-item">
                            <strong>💰 السعر:</strong>
                            <p>${app.pricing}</p>
                        </div>
                        <div class="detail-item">
                            <strong>📝 الوصف:</strong>
                            <p>${app.description}</p>
                        </div>
                        <div class="detail-item">
                            <strong>📁 الوسائط:</strong>
                            <div class="media-container">
                                <span class="media-item">${app.logo}</span>
                                <span class="media-item">${app.audio}</span>
                                <span class="media-item">${app.video}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </td>
        </tr>
    `;
    
    $(detailsHTML).insertAfter(row).hide().fadeIn(500);
    console.log("✅ تم عرض تفاصيل التطبيق");
}

// إظهار كل التفاصيل
function showAllDetails() {
    console.log("👁️ إظهار كل التفاصيل");
    $('.app-details-row').remove();
    $('.show-details').prop('checked', true).trigger('change');
}

// إخفاء كل التفاصيل
function hideAllDetails() {
    console.log("🙈 إخفاء كل التفاصيل");
    $('.app-details-row').remove();
    $('.show-details').prop('checked', false);
}

// تحميل التطبيقات المخزنة
function loadStoredApps() {
    try {
        const storedApps = JSON.parse(localStorage.getItem('smartscope_apps')) || [];
        
        storedApps.forEach((app, index) => {
            const appNumber = appsData.length + index;
            
            const newRow = `
                <tr>
                    <td>${app.name}</td>
                    <td>${app.company}</td>
                    <td>${app.category}</td>
                    <td>${app.pricing}</td>
                    <td><input type="checkbox" class="show-details" data-app="${appNumber}"></td>
                </tr>
            `;
            
            $('#appsTable tbody').append(newRow);
            
            appsData.push({
                name: app.name,
                company: app.company,
                category: app.category,
                pricing: app.pricing,
                website: app.website,
                description: app.description,
                logo: "🖼️ شعار التطبيق",
                audio: "🔊 ملف صوتي",
                video: "🎬 فيديو"
            });
        });
        
        console.log(`📥 تم تحميل ${storedApps.length} تطبيق مخزن`);
    } catch (error) {
        console.error('❌ خطأ في تحميل البيانات:', error);
    }
}

// دوال مساعدة للصفحات الأخرى
function validateForm() {
    // دوال التحقق من النماذج
    return true;
}

function submitForm() {
    // دالة إرسال النموذج
    return true;
}