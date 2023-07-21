$(function() {
    Filter();

    function Filter() {
        const slider = document.getElementById('sliderPrice');
        const rangeMin = parseInt(slider.dataset.min);
        const rangeMax = parseInt(slider.dataset.max);
        const step = parseInt(slider.dataset.step);
        const filterInputs = document.querySelectorAll('input.filter__input');

        noUiSlider.create(slider, {
            start: [rangeMin, rangeMax],
            connect: true,
            step: step,
            range: {
                'min': rangeMin,
                'max': rangeMax
            },

            // make numbers whole
            format: {
                to: value => value,
                from: value => value
            }
        });

        // bind inputs with noUiSlider
        slider.noUiSlider.on('update', (values, handle) => {
            filterInputs[handle].value = values[handle];
        });

        filterInputs.forEach((input, indexInput) => {
            input.addEventListener('change', () => {
                slider.noUiSlider.setHandle(indexInput, input.value);
            })
        });
    }
    // Menu_filter_category
    $('.btn_filter_category').click(function(e) {
        e.preventDefault();
        $('.Vertical_Menu_filter').animate({ right: '0' })

    });
    $('.Part_Close_Vertical_Menu_filter').click(function(e) {
        e.preventDefault();
        $('.Vertical_Menu_filter').animate({ right: '-400px' })
    });
});