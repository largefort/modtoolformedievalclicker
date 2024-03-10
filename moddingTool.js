document.addEventListener('DOMContentLoaded', function() {
    const generateModButton = document.getElementById('generateMod');
    if (generateModButton) {
        generateModButton.addEventListener('click', function() {
            const modData = {
                unitCosts: {
                    knight: document.getElementById('knightCost').value,
                    archer: document.getElementById('archerCost').value,
                    wizard: document.getElementById('wizardCost').value,
                    paladin: document.getElementById('paladinCost').value
                },
                newUnits: [{
                    name: document.getElementById('newUnitName').value,
                    cost: document.getElementById('newUnitCost').value
                }],
                goldMultiplier: document.getElementById('goldMultiplier').value,
                backgroundImage: document.getElementById('backgroundImage').value
            };

            const modDataString = JSON.stringify(modData, null, 2);
            const blob = new Blob([modDataString], {type: "application/json"});
            const url = URL.createObjectURL(blob);

            // Create a link and trigger download
            const downloadLink = document.createElement('a');
            downloadLink.href = url;
            downloadLink.download = 'modconfiguration.json';
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        });
    } else {
        console.error('Generate Mod button not found.');
    }
});

});
