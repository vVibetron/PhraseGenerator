// --- CONSTANTS ---
const APP_VERSION = '1.2.2';
const MAX_PHRASES_PER_CATEGORY = 1000;
const MAX_CATEGORIES = 10;
const TOAST_DURATION = 1500;

const initialData = {
    phrases: {
        community: [
            "We value our community. Please reach out.",
            "Let's connect. We're here for the community.",
            "We thrive on community. Please contact us.",
            "Let's collaborate. We're open to all.",
            "Our community matters. Connect with us.",
            "We seek community connections. Reach out.",
            "We value community input. Let's talk.",
            "Your community partnership is welcome.",
            "We believe in our community. Get in touch.",
            "We're listening to our community. Reach out.",
            "Open to community partnership. Contact us.",
            "We support our community. Let's talk.",
            "Your feedback matters to our community.",
            "We are driven by community. Let's connect.",
            "We're here for our community. Reach out.",
            "Let's build community together. Contact us.",
            "Community is our focus. We're available.",
            "We welcome community feedback. Get in touch.",
            "Engage with us. We're community-focused.",
            "We're dedicated to our community. Call us.",
            "Our door is open to the community.",
            "We're here to serve our community.",
            "Let's work together for our community.",
            "Community engagement is our priority.",
            "We value your role in our community.",
            "Let's grow our community. Get in touch.",
            "We're a community-first organization.",
            "Connect with us about community matters.",
            "We're listening. Community feedback is key.",
            "Our community makes us stronger. Reach out.",
            "We're open to all community ideas.",
            "We stand with our community. Contact us.",
            "Join us in supporting our community.",
            "Community collaboration is welcome here.",
            "We're committed to community. Let's chat.",
            "Our community mission: to listen and act.",
            "We're all ears for our community.",
            "Your voice is vital to our community.",
            "We're fostering community. Join us.",
            "Let's discuss community needs. Reach out.",
            "We cherish our community. Get in touch.",
            "Our community commitment is strong.",
            "We're here to help our community thrive.",
            "We're community-based. Let's connect.",
            "We value our community ties. Contact us.",
            "Let's partner for community success.",
            "We're responsive to our community.",
            "Our community focus is unwavering.",
            "We're in service to our community.",
            "Let's innovate for our community.",
            "Community is at our core. Reach out.",
            "We believe in community. Let's talk.",
            "We're accessible to our community.",
            "Let's strengthen our community together.",
            "We're ready to hear from our community.",
            "Community involvement is encouraged.",
            "We're a proud community partner.",
            "We're invested in our community.",
            "Let's make our community better.",
            "We're open to community conversations.",
            "Our community vision: collaboration.",
            "We're here to listen to our community.",
            "Let's build bridges in our community.",
            "We're community allies. Get in touch.",
            "Your perspective matters to our community.",
            "We're dedicated to community outreach.",
            "We invite community dialogue. Contact us.",
            "We're focused on community solutions.",
            "Let's champion our community. Reach out.",
            "We're a resource for our community.",
            "We value our community members. Call us.",
            "We're committed to community success.",
            "Let's connect, for our community.",
            "We're building a better community.",
            "We're here for community dialogue.",
            "We welcome community collaboration.",
            "Let's empower our community. Get in touch.",
            "We're community-centric. Let's talk.",
            "Our community goals align with yours.",
            "We're here to support community growth.",
            "We seek community partnership. Reach out.",
            "We're responsive to community needs.",
            "Let's talk about our community's future.",
            "We're dedicated to community well-being.",
            "We're your community partner. Contact us.",
            "We're open to community suggestions.",
            "Let's achieve community goals together.",
            "We're here for all community members.",
            "We're listening. Community input is vital.",
            "We're community-focused. Get in touch.",
            "Let's create community impact. Reach out.",
            "We're a trusted community presence.",
            "We're here to build community. Let's talk.",
            "We're committed to our community's voice.",
            "Let's engage. Our community is key.",
            "We're driven by community values.",
            "We're here to listen and help."
        ],
        quality: [
            "We only use the highest quality products.",
            "We use premium-grade materials.",
            "Only the finest materials are used.",
            "We are committed to superior quality.",
            "We source only top-tier products.",
            "Our products meet the highest standards.",
            "Quality is our primary focus.",
            "We never compromise on quality.",
            "We select only premium materials.",
            "Our commitment is to quality first.",
            "We use materials of the highest caliber.",
            "Excellence in materials is our standard.",
            "We insist on high-quality products.",
            "Our products are sourced for quality.",
            "We are dedicated to product excellence.",
            "Only the best products make our cut.",
            "We utilize superior-grade products.",
            "Our standard is high-quality materials.",
            "We believe in using the best products.",
            "We use only top-quality components.",
            "Our focus is on premium products.",
            "We're committed to the best materials.",
            "We use only A-grade products.",
            "Our materials are selected for quality.",
            "We are selective about our materials.",
            "We build with high-quality products.",
            "Our products are of the highest quality.",
            "We prioritize quality in all products.",
"Quality materials are our guarantee.",
            "We use only the most durable products.",
            "Our pledge is high-quality materials.",
            "We source and use premium products.",
            "We are defined by our product quality.",
            "We use only first-rate materials.",
            "Our standard is excellence in products.",
            "We use only best-in-class products.",
            "We're dedicated to superior materials.",
            "Our products are chosen for high quality.",
            "We use only market-leading products.",
            "We guarantee high-quality products.",
            "Our selection is always quality-driven.",
            "We utilize only premium-quality products.",
            "We're committed to high product standards.",
            "We use only top-of-the-line materials.",
            "Our materials are of the highest grade.",
            "We accept nothing less than high quality.",
            "We use only the finest components.",
            "Our products are built on quality.",
            "We ensure our products are top quality.",
            "We use only rigorously tested products.",
            "Our promise is high-quality products.",
            "We use only top-grade materials.",
            "We are committed to premium quality.",
            "Our materials are always top-quality.",
            "We use only choice materials.",
            "We use only fine-quality products.",
            "Our standard is premium materials.",
            "We use only high-end products.",
            "We are firm on high-quality materials.",
            "Our products are all premium quality.",
            "We select materials for excellence.",
            "We use only superior-quality materials.",
            "We're serious about product quality.",
            "We use only top-tier components.",
            "Our materials are of superior quality.",
            "We use only high-quality items.",
            "We are strict about product quality.",
            "Our products are of the finest quality.",
            "We use only select-grade materials.",
            "We are devoted to high-quality products.",
            "Our materials are always premium.",
            "We use only the most refined products.",
            "We are focused on quality products.",
            "We use only top-rated materials.",
            "Our commitment is to premium products.",
            "We use only high-grade materials.",
            "We are dedicated to premium materials.",
            "Our products are always high-quality.",
            "We use only best-in-industry products.",
            "We stand by our product quality.",
            "We use only top-shelf materials.",
            "Our products are sourced for excellence.",
            "We use only choice-quality products.",
            "We are unwavering on product quality.",
            "Our materials are of the highest standard.",
            "We use only superior-grade components.",
            "We are advocates for high-quality products.",
            "Our products are of premium quality.",
            "We use only high-specification materials.",
            "We are all about high-quality products.",
            "Our materials are industry-best.",
            "We use only top-end products.",
            "We are committed to top-quality products.",
            "Our products are always superior quality.",
            "We use only first-class materials.",
            "We are dedicated to product quality.",
            "Our materials are meticulously sourced.",
            "We use only the finest products available.",
            "We are known for our product quality."
        ],
        green: [
            "We go green where we can.",
            "We prioritize eco-friendly options.",
            "We are mindful of our green footprint.",
            "We support sustainable practices.",
            "We make eco-conscious choices.",
            "We're committed to sustainability.",
            "We opt for green solutions actively.",
            "We reduce our environmental impact.",
            "We are focused on green initiatives.",
            "We choose sustainable options first.",
            "We are working to be more eco-friendly.",
            "We integrate green practices.",
            "We are conscious of our eco-impact.",
            "We strive for sustainability.",
            "We are implementing green policies.",
            "We value sustainable operations.",
            "We are committed to eco-friendly habits.",
            "We are actively increasing sustainability.",
            "We make green choices when possible.",
            "We are moving towards sustainability.",
            "We are conscious of our planet.",
            "We are always improving our eco-efforts.",
            "We are dedicated to green practices.",
            "We make efforts to be sustainable.",
            "We are embracing green alternatives.",
            "We are trying to be more sustainable.",
            "We are environmentally aware.",
            "We are committed to reducing our impact.",
            "We are adopting greener methods.",
            "We are focused on eco-friendly results.",
            "We are actively eco-conscious.",
            "We support green measures.",
            "We are working on our carbon footprint.",
            "We are making sustainable choices.",
            "We are green-focused in our operations.",
            "We are implementing eco-friendly steps.",
            "We are mindful of our eco-responsibilities.",
            "We are taking steps to be greener.",
            "We are always seeking green solutions.",
            "We are making strides in sustainability.",
            "We are prioritizing greener operations.",
            "We are conscious of our resource use.",
            "We are working towards a green future.",
            "We are committed to our planet.",
            "We are actively seeking sustainable paths.",
            "We are focused on eco-conscious operation.",
            "We are becoming more eco-friendly.",
            "We are choosing greener paths.",
            "We are dedicated to being sustainable.",
            "We are mindful of our environmental duty.",
            "We are taking green initiatives.",
            "We are always looking for green options.",
            "We are increasing our green efforts.",
            "We are moving towards a greener model.",
            "We are conscious of our eco-footprint.",
            "We are working to protect our planet.",
            "We are implementing greener strategies.",
            "We are committed to green improvements.",
            "We are actively working on sustainability.",
            "We are making eco-friendly decisions.",
            "We are supporting a greener planet.",
            "We are growing our green commitment.",
            "We are mindful of our Earth.",
            "We are adopting sustainable habits.",
            "We are focused on our green goals.",
            "We are making our practices greener.",
            "We are striving to be eco-friendly.",
            "We are dedicated to our green promise.",
            "We are continuously improving eco-efforts.",
            "We are eco-aware in our choices.",
            "We are focused on reducing our footprint.",
            "We are moving towards eco-friendly goals.",
            "We are committed to eco-conscious action.",
            "We are actively pursuing green practices.",
            "We are making our operations sustainable.",
            "We are conscious of our environmental role.",
            "We are working to be more sustainable.",
            "We are prioritizing our planet.",
            "We are focused on sustainable solutions.",
            "We are making conscious green efforts.",
            "We are committed to a sustainable future.",
            "We are actively reducing our eco-impact.",
            "We are dedicated to eco-friendly work.",
            "We are implementing sustainable solutions.",
            "We are mindful of our sustainable duty.",
            "We are taking steps for sustainability.",
            "We are always looking to be greener.",
            "We are increasing our eco-consciousness.",
            "We are moving towards green operations.",
            "We are conscious of our eco-impacts.",
            "We are working to preserve our planet.",
            "We are implementing green-friendly plans.",
            "We are committed to eco-friendly progress.",
            "We are actively pursuing sustainability.",
            "We are making environmentally-friendly choices.",
            "We are supporting a more sustainable Earth.",
            "We are growing our sustainable practices."
        ],
        service: [
            "We specialize in personal customer service.",
            "We offer dedicated client support.",
            "Our focus is personalized customer care.",
            "We provide one-on-one customer service.",
            "We excel in personal client relations.",
            "We're committed to personal service.",
            "We provide attentive customer support.",
            "Our specialty is tailored customer care.",
            "We offer a personalized service experience.",
            "We pride ourselves on personal service.",
            "We deliver bespoke customer service.",
            "We're experts in personal client service.",
            "We focus on individual customer needs.",
            "We provide dedicated, personal service.",
            "We believe in personal customer attention.",
            "We offer customized client support.",
            "Our service is personal and attentive.",
            "We are dedicated to personal client care.",
            "We provide focused customer service.",
            "We're all about personal customer care.",
            "We offer a personal touch in our service.",
            "We ensure personal customer satisfaction.",
            "We provide individualized client service.",
            "Our service is tailored to you.",
            "We offer personal, dedicated support.",
            "We're focused on personal client service.",
            "We champion personal customer service.",
            "We provide personal service to every client.",
            "We're known for our personal service.",
            "We offer attentive, personal service.",
            "We are committed to personal client care.",
            "We provide personal, bespoke service.",
            "We're dedicated to knowing you better.",
            "We offer client-centric personal service.",
            "We specialize in attentive customer care.",
            "We provide customized service for all.",
            "We excel in personalized client support.",
            "We're committed to tailored customer service.",
            "We offer responsive, personal service.",
            "We focus on personal client relationships.",
            "We provide customer service with a personal touch.",
            "We're specialists in personal service.",
            "We offer in-depth personal customer care.",
            "We are defined by our personal service.",
            "We provide dedicated, one-on-one service.",
            "We're committed to knowing our customers.",
            "We offer high-touch customer service.",
            "We're focused on one-on-one client care.",
            "We are experts in personalized service.",
            "We provide uniquely personal service.",
            "We're dedicated to personal service excellence.",
            "We offer personal, relationship-based service.",
            "We provide tailor-made customer service.",
            "We're committed to personal customer support.",
            "We offer personal service for every need.",
            "We're personal service professionals.",
            "We're focused on personal customer interaction.",
            "We provide genuine, personal service.",
            "We're devoted to personal customer service.",
            "We offer specialized personal service.",
            "We're committed to your personal service needs.",
            "We provide hands-on customer service.",
            "We're personal, attentive, and ready.",
            "We offer direct, personal customer service.",
            "We're focused on individual service.",
            "We provide personal care to our clients.",
            "We're here for your personal service needs.",
            "We offer tailored client interactions.",
            "We're committed to personal client support.",
            "We provide thoughtful, personal service.",
            "We're dedicated to personal customer focus.",
            "We offer a personal service commitment.",
            "We're personal customer service experts.",
            "We provide one-on-one client attention.",
            "We're focused on personal client attention.",
            "We are personal service specialists.",
            "We offer a truly personal service.",
            "We're committed to personalized support.",
            "We provide customer care that is personal.",
            "We're dedicated to personal client needs.",
            "We offer focused, personal service.",
            "We're specialists in personal client care.",
            "We provide attentive, personal customer care.",
            "We're focused on personal, quality service.",
            "We are committed to your personal needs.",
            "We provide service tailored to you.",
            "We're dedicated to individual client care.",
            "We offer a focused, personal service experience.",
            "We're personal customer care specialists.",
            "We provide service with a personal focus.",
            "We're committed to personal client focus.",
            "We offer responsive, personal support.",
            "We're dedicated to personal service.",
            "We provide one-to-one customer service.",
            "We're focused on personal, attentive service.",
            "We specialize in people-first service."
        ]
    },
    diagnostics: {
        version: APP_VERSION,
        generatorClicks: {},
        copyClicks: {},
        copyAllClicks: {},
        copyAllLibrariesClicks: 0,
        generateAllClicks: 0,
        phrasesAdded: {},
        categoriesAdded: 0,
        lastGenerated: {},
        reportGeneratedAt: null,
        userAgent: navigator.userAgent,
        viewport: `${window.innerWidth}x${window.innerHeight}`
    },
    // Default config with original phrases
    config: [
        { key: 'community', title: 'We love working with the community, please reach out.' },
        { key: 'quality', title: 'We only use the highest quality products' },
        { key: 'green', title: 'We go green where we can' },
        { key: 'service', title: 'We specialize in personal customer service' }
    ]
};

// --- GLOBAL STATE ---
let appData = { ...initialData };

// --- UTILITY FUNCTIONS ---

/**
 * Shows a toast message
 * @param {string} message - The message to display
 */
function showToast(message) {
    const toast = document.getElementById('copy-toast');
    if (toast) {
        toast.textContent = message;
        toast.style.display = 'block';
        setTimeout(() => {
            toast.style.display = 'none';
        }, TOAST_DURATION);
    }
}

/**
 * Copies text to the clipboard
 * @param {string} text - The text to copy
 * @param {string} successMessage - Message to show on success
 */
function copyToClipboard(text, successMessage = 'Copied!') {
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
        showToast(successMessage);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
        showToast('Copy failed. See console.');
    });
}

/**
 * Gets a random item from an array
 * @param {Array} arr - The array to pick from
 * @returns {*} A random item
 */
function getRandomItem(arr) {
    if (!arr || arr.length === 0) return '';
    return arr[Math.floor(Math.random() * arr.length)];
}

// --- MODAL FUNCTIONS ---

function setupModals() {
    setupModal('diag-modal', 'diag-btn', 'diag-close');
    setupModal('add-phrase-modal', null, 'add-phrase-close', 'add-phrase-cancel');
    setupModal('add-category-modal', 'add-new-category', 'add-category-close', 'add-category-cancel');
}

/**
 * Sets up a modal's open and close triggers
 * @param {string} modalId - ID of the modal element
 * @param {string|null} openBtnId - ID of the button that opens the modal
 * @param {...string} closeBtnIds - IDs of buttons that close the modal
 */
function setupModal(modalId, openBtnId, ...closeBtnIds) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    if (openBtnId) {
        const openBtn = document.getElementById(openBtnId);
        if (openBtn) {
            openBtn.addEventListener('click', () => modal.style.display = 'flex');
        }
    }

    closeBtnIds.forEach(id => {
        const closeBtn = document.getElementById(id);
        if (closeBtn) {
            closeBtn.addEventListener('click', () => modal.style.display = 'none');
        }
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// --- APPLICATION LOGIC ---

/**
 * Loads data from chrome.storage or uses initialData
 */
function loadData() {
    return new Promise((resolve) => {
        if (chrome && chrome.storage && chrome.storage.local) {
            chrome.storage.local.get(['phrases', 'diagnostics', 'config'], (result) => {
                if (chrome.runtime.lastError) {
                    console.error("Error loading data:", chrome.runtime.lastError);
                    resolve(initialData); // Resolve with defaults on error
                } else if (result.phrases && result.config) {
                    // Merge saved data with defaults for diagnostics
                    appData = {
                        phrases: result.phrases,
                        config: result.config,
                        diagnostics: { ...initialData.diagnostics, ...result.diagnostics }
                    };
                    resolve(appData);
                } else {
                    // No data found, save initial data
                    saveData(initialData.phrases, initialData.config, initialData.diagnostics)
                        .then(() => resolve(initialData));
                }
            });
        } else {
            // Running outside of extension, use initial data
            console.warn("Chrome storage not found. Using local data.");
            resolve(initialData);
        }
    });
}

/**
 * Saves data to chrome.storage
 * @param {object} phrases - Phrases object
 * @param {object} config - Config array
 * @param {object} diagnostics - Diagnostics object
 */
function saveData(phrases, config, diagnostics) {
    return new Promise((resolve, reject) => {
        const dataToSave = { phrases, config, diagnostics };
        if (chrome && chrome.storage && chrome.storage.local) {
            chrome.storage.local.set(dataToSave, () => {
                if (chrome.runtime.lastError) {
                    console.error("Error saving data:", chrome.runtime.lastError);
                    reject(chrome.runtime.lastError);
                } else {
                    resolve();
                }
            });
        } else {
            // Not in extension, resolve without saving
            resolve();
        }
    });
}

/**
 * Renders all phrase generator cards
 */
function renderGenerators() {
    const container = document.getElementById('generators-container');
    if (!container) return;
    container.innerHTML = ''; // Clear existing
    
    appData.config.forEach(cat => {
        const key = cat.key;
        const title = cat.title;
        const phraseCount = appData.phrases[key] ? appData.phrases[key].length : 0;

        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-header">
                <h2 class="card-title" title="${title}">${title}</h2>
            </div>
            <div class="result-box" id="result-${key}">Select a phrase...</div>
            <div class="button-group">
                <button class="btn btn-primary btn-sm generate-btn" data-key="${key}">Generate</button>
                <button class="btn btn-secondary btn-sm copy-btn" data-key="${key}">Copy</button>
            </div>
            <div class="button-group" style="margin-top: 8px;">
                <button class="btn btn-secondary btn-sm copy-all-btn" data-key="${key}">Copy All (${phraseCount})</button>
                <button class="btn btn-secondary btn-sm add-phrase-btn" data-key="${key}">+ Add</button>
            </div>
        `;
        container.appendChild(card);
    });
    
    // After rendering, attach event listeners
    attachCardListeners();
}

/**
 * Attaches event listeners to all buttons on the cards
 */
function attachCardListeners() {
    document.querySelectorAll('.generate-btn').forEach(btn => {
        btn.addEventListener('click', handleGenerate);
    });
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', handleCopy);
    });
    document.querySelectorAll('.copy-all-btn').forEach(btn => {
        btn.addEventListener('click', handleCopyAll);
    });
    document.querySelectorAll('.add-phrase-btn').forEach(btn => {
        btn.addEventListener('click', handleAddPhraseClick);
    });
}

// --- EVENT HANDLERS ---

/**
 * Handles "Generate" button click
 * @param {Event} e - Click event
 */
function handleGenerate(e) {
    const key = e.target.dataset.key;
    if (!key || !appData.phrases[key]) return;

    const phrase = getRandomItem(appData.phrases[key]);
    const resultBox = document.getElementById(`result-${key}`);
    if (resultBox) {
        resultBox.textContent = phrase || 'No phrases available.';
    }
    
    // Update diagnostics
    appData.diagnostics.generatorClicks[key] = (appData.diagnostics.generatorClicks[key] || 0) + 1;
    appData.diagnostics.lastGenerated[key] = phrase;
    saveData(appData.phrases, appData.config, appData.diagnostics);
}

/**
 * Handles "Copy" button click
 * @param {Event} e - Click event
 */
function handleCopy(e) {
    const key = e.target.dataset.key;
    const resultBox = document.getElementById(`result-${key}`);
    if (!resultBox) return;
    
    const text = resultBox.textContent;
    if (text && text !== 'Select a phrase...') {
        copyToClipboard(text);
        // Update diagnostics
        appData.diagnostics.copyClicks[key] = (appData.diagnostics.copyClicks[key] || 0) + 1;
        saveData(appData.phrases, appData.config, appData.diagnostics);
    } else {
        showToast('Generate a phrase first!');
    }
}

/**
 * Handles "Copy All" button click
 * @param {Event} e - Click event
 */
function handleCopyAll(e) {
    const key = e.target.dataset.key;
    if (!key || !appData.phrases[key]) return;

    const text = appData.phrases[key].join('\n');
    copyToClipboard(text, `Copied ${appData.phrases[key].length} phrases!`);
    
    // Update diagnostics
    appData.diagnostics.copyAllClicks[key] = (appData.diagnostics.copyAllClicks[key] || 0) + 1;
    saveData(appData.phrases, appData.config, appData.diagnostics);
}

/**
 * Handles "Generate All Four" button click
 */
function handleGenerateAll() {
    document.querySelectorAll('.generate-btn').forEach(btn => btn.click());
    
    // Update diagnostics
    appData.diagnostics.generateAllClicks = (appData.diagnostics.generateAllClicks || 0) + 1;
    // Note: saveData is already called by each individual handleGenerate click
}

/**
 * Handles "Copy All Libraries" button click
 */
function handleCopyAllLibraries() {
    let allText = '';
    appData.config.forEach(cat => {
        const key = cat.key;
        allText += `--- ${cat.title} ---\n\n`;
        allText += appData.phrases[key].join('\n');
        allText += '\n\n';
    });

    copyToClipboard(allText, 'Copied all libraries!');
    
    // Update diagnostics
    appData.diagnostics.copyAllLibrariesClicks = (appData.diagnostics.copyAllLibrariesClicks || 0) + 1;
    saveData(appData.phrases, appData.config, appData.diagnostics);
}

/**
 * Handles click on "+ Add" button, opening the modal
 * @param {Event} e - Click event
 */
function handleAddPhraseClick(e) {
    const key = e.target.dataset.key;
    const phraseList = appData.phrases[key] || [];
    
    if (phraseList.length >= MAX_PHRASES_PER_CATEGORY) {
        showToast(`Max ${MAX_PHRASES_PER_CATEGORY} phrases reached.`);
        return;
    }

    document.getElementById('add-phrase-category').value = key;
    document.getElementById('new-phrase-input').value = '';
    document.getElementById('add-phrase-modal').style.display = 'flex';
}

/**
 * Saves the new phrase from the modal
 */
function saveNewPhrase() {
    const key = document.getElementById('add-phrase-category').value;
    const input = document.getElementById('new-phrase-input');
    const newPhrase = input.value.trim();

    if (!key || !newPhrase) {
        showToast('Phrase cannot be empty.');
        return;
    }

    if (!appData.phrases[key]) {
        appData.phrases[key] = [];
    }
    
    if (appData.phrases[key].length >= MAX_PHRASES_PER_CATEGORY) {
        showToast(`Max ${MAX_PHRASES_PER_CATEGORY} phrases reached.`);
        return;
    }

    appData.phrases[key].push(newPhrase);
    
    // Update diagnostics
    appData.diagnostics.phrasesAdded[key] = (appData.diagnostics.phrasesAdded[key] || 0) + 1;

    saveData(appData.phrases, appData.config, appData.diagnostics).then(() => {
        showToast('Phrase added!');
        renderGenerators(); // Re-render to update counts
        document.getElementById('add-phrase-modal').style.display = 'none';
        input.value = '';
    });
}

/**
 * Saves the new category from the modal
 */
function saveNewCategory() {
    if (appData.config.length >= MAX_CATEGORIES) {
        showToast(`Max ${MAX_CATEGORIES} categories reached.`);
        return;
    }
    
    const nameInput = document.getElementById('new-category-name');
    const phraseInput = document.getElementById('new-category-phrase');
    
    const newTitle = nameInput.value.trim();
    const newPhrase = phraseInput.value.trim();
    
    if (!newTitle || !newPhrase) {
        showToast('Category name and first phrase are required.');
        return;
    }
    
    // Create a simple key from the title
    const newKey = newTitle.toLowerCase().replace(/[^a-z0-9]/g, '').substring(0, 15);
    
    if (appData.phrases[newKey]) {
        showToast('Category with this name already exists.');
        return;
    }
    
    // Update data
    appData.config.push({ key: newKey, title: newTitle });
    appData.phrases[newKey] = [newPhrase];
    
    // Update diagnostics
    appData.diagnostics.categoriesAdded = (appData.diagnostics.categoriesAdded || 0) + 1;
    appData.diagnostics.phrasesAdded[newKey] = 1;

    saveData(appData.phrases, appData.config, appData.diagnostics).then(() => {
        showToast('Category added!');
        renderGenerators(); // Re-render to show new category
        document.getElementById('add-category-modal').style.display = 'none';
        nameInput.value = '';
        phraseInput.value = '';
    });
}

/**
 * Opens the diagnostics modal and populates it
 */
function openDiagModal() {
    const diagContent = document.getElementById('diag-content');
    
    // Update diagnostics report time and viewport
    appData.diagnostics.reportGeneratedAt = new Date().toISOString();
    appData.diagnostics.viewport = `${window.innerWidth}x${window.innerHeight}`;
    
    diagContent.textContent = JSON.stringify(appData.diagnostics, null, 2);
    document.getElementById('diag-modal').style.display = 'flex';
}

/**
 * Copies the diagnostics report
 */
function copyDiagReport() {
    const diagContent = document.getElementById('diag-content');
    copyToClipboard(diagContent.textContent, 'Diagnostics copied!');
}

// --- INITIALIZATION ---

/**
 * Main function to initialize the popup
 */
async function initialize() {
    await loadData();
    renderGenerators();
    setupModals();
    
    // Attach global listeners
    document.getElementById('generate-all').addEventListener('click', handleGenerateAll);
    document.getElementById('copy-all-libraries').addEventListener('click', handleCopyAllLibraries);
    
    // Add Phrase Modal listeners
    document.getElementById('add-phrase-save').addEventListener('click', saveNewPhrase);
    
    // Add Category Modal listeners
    document.getElementById('add-new-category').addEventListener('click', () => {
        if (appData.config.length >= MAX_CATEGORIES) {
            showToast(`Max ${MAX_CATEGORIES} categories reached.`);
        } else {
            document.getElementById('add-category-modal').style.display = 'flex';
        }
    });
    document.getElementById('add-category-save').addEventListener('click', saveNewCategory);
    
    // Diagnostics listeners
    document.getElementById('diag-btn').addEventListener('click', openDiagModal);
    document.getElementById('diag-copy').addEventListener('click', copyDiagReport);

    // Set version number
    const diagBtn = document.getElementById('diag-btn');
    if (diagBtn) {
        diagBtn.textContent = `Run Diagnostics (v${APP_VERSION})`;
    }
}

// Start the application once the DOM is loaded
document.addEventListener('DOMContentLoaded', initialize);