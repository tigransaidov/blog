window.addEventListener('load', function () {
    const modalButtons = document.querySelectorAll('[data-modal]');
    const modalClose = document.querySelectorAll('.modal__close');
    const modals = document.querySelectorAll('.modal');
    const body = document.body;

    if (modalButtons.length > 0) {
        modalButtons.forEach(modalButton => {
            modalButton.addEventListener('click', event => {
                let $this = event.currentTarget;
                let modalId = $this.getAttribute('data-modal');
                let modal = document.getElementById(modalId);
                let modalContent = modal.querySelector('.modal__content');

                if (modal) {
                    modalContent.addEventListener('click', event => {
                        event.stopPropagation();
                    });
                    modal.classList.add('_show');
                    body.classList.add('_no-scroll');

                    setTimeout(() => {
                        modalContent.style.transform = "none";
                        modalContent.style.opacity = "1";
                    }, 1)
                }
            })
        })
    }
    if (modalClose.length > 0) {
        modalClose.forEach(closeItem => {
            closeItem.addEventListener('click', event => {
                let $this = event.currentTarget;
                let currentModal = $this.closest('.modal')
                closeModal(currentModal);
            })
        })
    }

    if (modals.length > 0) {
        modals.forEach(modal => {
            modal.addEventListener('click', event => {
                let currentModal = event.currentTarget;
                closeModal(currentModal);
            })
        })
    }

    function closeModal(modal) {
        let modalContent = modal.querySelector('.modal__content');
        modalContent.removeAttribute('style');

        setTimeout(() => {
            modal.classList.remove('_show');
            body.classList.remove('_no-scroll');
        }, 200)
    }

    /* Mobile Nav */
    const burger = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');
    const page = document.getElementById('page');

    if (burger) {
        burger.addEventListener('click', event => {
            if (body.classList.contains('_show-sidebar')) {
                closeSidebar();
            } else {
                showSidebar();
            }
        })
    }

    /* Sidebar, Page Mask */
    function showSidebar() {
        let mask = document.createElement('div');
        mask.classList.add('page__mask')
        mask.addEventListener('click', closeSidebar);
        page.appendChild(mask);

        body.classList.add('_show-sidebar');
    }

    function closeSidebar() {
        body.classList.remove('_show-sidebar');
        document.querySelector('.page__mask').remove();
    }

    /* Textarea */
    const textAreas = document.querySelectorAll('[data-autoresize]');
    if (textAreas.length > 0) {
        textAreas.forEach(textArea => {
            let textAreaH = textArea.offsetHeight;

            textArea.addEventListener('input', event => {
                let $this = event.target;

                $this.style.height = textAreaH + 'px';
                $this.style.height = $this.scrollHeight + 'px';
            })
        })
    }
})