// FILE: script.js

row.appendChild(label);
row.appendChild(conf);
row.addEventListener('click', ()=> showTreatment(p.className));
resultsEl.appendChild(row);
});
}

function showTreatment(className){
treatmentList.innerHTML = '';
// Simple example mapping — replace with real domain knowledge for each disease
const tipsMap = {
'Healthy': ['No action needed — plant looks healthy.'],

// Apple diseases
'Apple Scab': [
'Remove and destroy fallen leaves and mummified fruit to reduce overwintering spores.',
'Prune for better airflow and reduce humidity inside the canopy.',
'Consider protectant sprays at bud break in wet seasons; follow label instructions and local guidelines.'
],
'Black Rot': [
'Sanitation: remove mummified fruit and prune out cankers and dead wood; dispose of prunings securely.',
'Improve air circulation and avoid overhead irrigation.',
'Use a scab/rot protectant spray program if cultural controls are insufficient (follow local extension recommendations).'
],

// Cherry (including sour)
'Powdery Mildew': [
'Prune to increase air flow and reduce dense growth; manage nitrogen to avoid excessive succulent growth.',
'Avoid wetting foliage during irrigation (use drip or short cycles).',
'Use labeled fungicides preventatively in high-pressure years; rotate modes of action to avoid resistance.'
],

// Potato
'Early Blight': [
'Rotate crops (avoid successive solanaceous crops) and remove infected plant debris.',
'Maintain balanced fertilization and avoid excessive late-season nitrogen which can increase susceptibility.',
'Apply fungicides when disease pressure is high or if early infection is detected; follow label directions.'
],
'Late Blight': [
'Use certified seed and avoid overhead irrigation when possible; remove and destroy infected plants promptly.',
'Monitor weather and apply appropriate fungicides preventatively in wet, cool conditions.',
'Consult local extension for resistant varieties and recommended spray programs.'
],

// Tomato
'Leaf Mold': [
'Improve air circulation and reduce humidity by pruning and spacing plants appropriately.',
'Avoid wetting leaves with irrigation; water early in the day so foliage dries quickly.',
'Remove and destroy heavily infected leaves; use fungicides if necessary and according to local guidance.'
]
};

const tips = tipsMap[className] || ['No treatment suggestions available — consult an expert.'];
tips.forEach(t=>{
const li = document.createElement('li'); li.textContent = t; treatmentList.appendChild(li);
});
}

function escapeHtml(text){
const map = { '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'":"'"};
return text.replace(/[&<>\"]/g, function(m){ return map[m]; });
}

// Initialize on load
window.addEventListener('load', ()=> init());
