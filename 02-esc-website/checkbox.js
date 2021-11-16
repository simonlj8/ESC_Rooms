
        const checkbox_from = Array.from(
            document.querySelectorAll('#rating_from [type="checkbox"]')
        ).reverse();

        let lastSelected1 = -1;
        deselectFrom = (a, b) => {
            for (let j = a; j < b; j++) {
                checkbox_from[j].checked = false;
            }
        };
        deselectAll = () => {
            deselectFrom(0, checkbox_from.length);
        };
        
        checkbox_from.forEach((checkbox, i) => {
            checkbox.onclick = function (event) {
                const self = event.target;

                if (self.checked) {
                    //Select everything up to and including self
                    deselectAll();
                    for (let j = 0; j <= i; j++) {
                        checkbox_from[j].checked = true;
                    }
                } else if (i === lastSelected1) {
                    deselectAll();
                } else {
                    // Keep self checked, but deselect everything after self
                    self.checked = true;
                    deselectFrom(i + 1, checkbox_from.length);
                }

                lastSelected1 = i;
                document.querySelector('#rate_from').innerText = checkbox_from.filter(x1 => x1.checked).length
            };
        });
