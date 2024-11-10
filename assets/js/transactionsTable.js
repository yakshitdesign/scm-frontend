document.addEventListener('DOMContentLoaded', function() {
    const isTransactionPage = window.location.pathname.includes('transactions.html');
    
    const transactions = [
        {
            id: '01',
            type: 'Materials',
            payment: 'Credit Card',
            date: 'Oct 12, 2024', 
            business: 'Home Depot',
            description: 'Purchased Wood Materials',
            amount: '$1,240.23',
            employee: 'John Doe',
            project: 'Randhurst Macys'
        },
        {
            id: '02',
            type: 'Labor',
            payment: 'Check',
            date: 'Oct 15, 2024',
            business: 'ABC Contractors',
            description: 'Contract Labor Services',
            amount: '$3,500.00',
            employee: 'Jane Smith',
            project: 'Downtown Plaza'
        },
        {
            id: '03',
            type: 'Equipment',
            payment: 'Wire Transfer',
            date: 'Oct 18, 2024',
            business: 'Equipment Co.',
            description: 'Heavy Machinery Rental',
            amount: '$2,750.50',
            employee: 'Mike Johnson',
            project: 'City Center'
        },
        {
            id: '04',
            type: 'Supplies',
            payment: 'Credit Card',
            date: 'Oct 20, 2024',
            business: 'Lowes',
            description: 'Construction Supplies',
            amount: '$895.75',
            employee: 'Sarah Wilson',
            project: 'Oakbrook Mall'
        },
        {
            id: '05',
            type: 'Materials',
            payment: 'ACH',
            date: 'Oct 22, 2024',
            business: 'Steel Supply Inc',
            description: 'Steel Beams Order',
            amount: '$4,200.00',
            employee: 'Tom Brown',
            project: 'Highland Tower'
        },
        {
            id: '06',
            type: 'Services',
            payment: 'Credit Card',
            date: 'Oct 25, 2024',
            business: 'City Permits',
            description: 'Building Permits',
            amount: '$750.00',
            employee: 'Lisa Anderson',
            project: 'Westfield Complex'
        },
        {
            id: '07',
            type: 'Equipment',
            payment: 'Check',
            date: 'Oct 27, 2024',
            business: 'Tool World',
            description: 'Power Tools Purchase',
            amount: '$1,875.25',
            employee: 'David Clark',
            project: 'River North'
        },
        {
            id: '08',
            type: 'Materials',
            payment: 'Wire Transfer',
            date: 'Oct 29, 2024',
            business: 'Glass Works',
            description: 'Custom Glass Panels',
            amount: '$3,250.00',
            employee: 'Emma Davis',
            project: 'Loop Office'
        },
        {
            id: '09',
            type: 'Labor',
            payment: 'ACH',
            date: 'Nov 1, 2024',
            business: 'Pro Painters',
            description: 'Interior Painting',
            amount: '$2,100.00',
            employee: 'Robert White',
            project: 'South Shore'
        },
        {
            id: '10',
            type: 'Supplies',
            payment: 'Credit Card',
            date: 'Nov 3, 2024',
            business: 'Menards',
            description: 'General Supplies',
            amount: '$925.50',
            employee: 'Chris Martin',
            project: 'Lincoln Park'
        },
        // Add more transaction data as needed
    ];

    $('#transactionsTable').DataTable({
        data: isTransactionPage ? transactions : transactions.slice(0, 5),
        columns: [
            // Checkbox column (always shown)
            {
                data: null,
                orderable: false,
                className: 'h-full px-4 py-2 text-left text-sm font-normal border-r border-neutral-200 dark:border-neutral-600',
                render: function() {
                    return `
                        <div class="h-full flex justify-center items-center">
                            <label class="flex items-center cursor-pointer relative">
                                <input type="checkbox" class="row-checkbox peer h-4 w-4 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 dark:border-neutral-500 checked:bg-slate-800 dark:checked:bg-neutral-200 checked:border-slate-800 dark:checked:border-neutral-200">
                                <span class="absolute text-white dark:text-neutral-900 opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                            </label>
                        </div>`;
                }
            },
            // ID column (conditional)
            ...(isTransactionPage ? [{
                data: 'id',
                className: 'h-full px-4 py-2 text-left text-sm font-normal border-r border-neutral-200 dark:border-neutral-600'
            }] : []),
            // Type column (conditional)
            ...(isTransactionPage ? [{
                data: 'type',
                className: 'h-full px-4 py-2 text-left text-sm font-normal border-r border-neutral-200 dark:border-neutral-600'
            }] : []),
            // Payment column (always shown)
            { 
                data: 'payment',
                className: 'h-full px-4 py-2 text-left text-sm font-normal border-r border-neutral-200 dark:border-neutral-600'
            },
            // Date column (always shown)
            { 
                data: 'date',
                className: 'h-full px-4 py-2 text-left text-sm font-normal border-r border-neutral-200 dark:border-neutral-600'
            },
            // Business column (always shown)
            { 
                data: 'business',
                className: 'h-full px-4 py-2 text-left text-sm font-normal border-r border-neutral-200 dark:border-neutral-600'
            },
            // Description column (conditional)
            ...(isTransactionPage ? [{
                data: 'description',
                className: 'h-full px-4 py-2 text-left text-sm font-normal border-r border-neutral-200 dark:border-neutral-600'
            }] : []),
            // Amount column (always shown)
            { 
                data: 'amount',
                className: 'h-full px-4 py-2 text-left text-sm font-normal border-r border-neutral-200 dark:border-neutral-600'
            },
            // Employee column (always shown)
            { 
                data: 'employee',
                className: 'h-full px-4 py-2 text-left text-sm font-normal border-r border-neutral-200 dark:border-neutral-600'
            },
            // Project column (always shown)
            { 
                data: 'project',
                className: 'h-full px-4 py-2 text-left text-sm font-normal border-r border-neutral-200 dark:border-neutral-600'
            },
            // Action column (always shown)
            {
                data: null,
                orderable: false,
                className: 'w-1 h-full px-4 py-2 text-left text-sm font-normal',
                render: function() {
                    return `
                        <div class="relative">
                            <button class="focus:outline-none hover:bg-neutral-200 dark:hover:bg-neutral-600 rounded-md p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" class="text-current" fill="none">
                                    <path d="M11.9922 12H12.0012" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M17.992 12H18.001" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M5.99981 12H6.00879" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>`;
                }
            }
        ],
        // Match employeeTable settings
        paging: isTransactionPage,
        info: isTransactionPage,
        searching: isTransactionPage,
        lengthChange: isTransactionPage,
        dom: isTransactionPage ? '<"overflow-x-auto"t><"flex items-center justify-between p-4 border-t border-neutral-200 dark:border-neutral-700"<"hidden md:flex text-sm font-normal text-neutral-500 dark:text-neutral-400"i><"flex items-center gap-2"p><"custom-length-menu-container">>' : 't',
        language: {
            search: "",
            searchPlaceholder: "Search...",
            lengthMenu: "_MENU_ / page",
            info: "Page _PAGE_ of _PAGES_",
            paginate: {
                first: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" class="text-current" fill="none"><path d="M15 6L9 12.0001L15 18" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="16" stroke-linecap="round" stroke-linejoin="round" /></svg>',
                last: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" class="text-current" fill="none"><path d="M9.00005 6L15 12L9 18" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="16" stroke-linecap="round" stroke-linejoin="round" /></svg>',
                next: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" class="text-current" fill="none">
                    <path d="M9.00005 6L15 12L9 18" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="16" stroke-linecap="round" stroke-linejoin="round" />
                </svg>`,
                previous: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" class="text-current" fill="none">
                    <path d="M15 6L9 12.0001L15 18" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="16" stroke-linecap="round" stroke-linejoin="round" />
                </svg>`
            }
        },
        pagingType: "numbers",
        pageLength: 12,
        lengthMenu: [12, 24, 36, 48],
        order: [[1, 'asc']],
        headerCallback: function(thead, data, start, end, display) {
            $(thead).find('th').eq(0).html(`
                <div class="flex justify-center items-center">
                    <label class="flex items-center cursor-pointer relative">
                        <input type="checkbox" class="select-all-checkbox peer h-4 w-4 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 dark:border-neutral-500 checked:bg-slate-800 dark:checked:bg-neutral-200 checked:border-slate-800 dark:checked:border-neutral-200">
                            <span class="absolute text-white dark:text-neutral-900 opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                        </span>
                    </label>
                </div>
            `);
        },
        drawCallback: function(settings) {
            const api = this.api();
            const pageInfo = api.page.info();

            if (pageInfo.pages > 1) {
                let html = `
                    <div class="flex items-center gap-2">
                        <button class="previous">${settings.oLanguage.oPaginate.previous}</button>
                        <div class="flex gap-1">`;

                // First page
                html += createPageButton(1, pageInfo.page === 0);

                // Ellipsis or second page
                if (pageInfo.page > 2) {
                    html += createEllipsis();
                } else if (pageInfo.pages > 1) {
                    html += createPageButton(2, pageInfo.page === 1);
                }

                // Pages around current
                for (let i = Math.max(2, pageInfo.page - 1); i <= Math.min(pageInfo.pages - 1, pageInfo.page + 1); i++) {
                    html += createPageButton(i + 1, pageInfo.page === i);
                }

                // Ellipsis or second-to-last page
                if (pageInfo.page < pageInfo.pages - 3) {
                    html += createEllipsis();
                } else if (pageInfo.pages > 1) {
                    html += createPageButton(pageInfo.pages - 1, pageInfo.page === pageInfo.pages - 2);
                }

                // Last page
                if (pageInfo.pages > 1) {
                    html += createPageButton(pageInfo.pages, pageInfo.page === pageInfo.pages - 1);
                }

                html += `
                        </div>
                        <button class="next">${settings.oLanguage.oPaginate.next}</button>
                    </div>`;

                $(this).find('.dataTables_paginate').html(html);

                // Add click handlers
                $(this).find('.dataTables_paginate button[data-page]').on('click', function() {
                    const page = $(this).data('page');
                    api.page(page - 1).draw('page');
                });
            }

            // Create custom length menu - Modified to prevent duplicates
            const existingMenu = document.querySelector('.custom-length-menu');
            const lengthMenuContainer = document.querySelector('.custom-length-menu-container');
            
            if (!existingMenu && lengthMenuContainer) {
                const button = document.createElement('button');
                button.className = 'custom-length-menu hidden md:flex gap-1 justify-between items-center p-2 rounded-md text-sm text-neutral-900 bg-white hover:bg-neutral-200 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 focus:outline-none transition-ease-in-out duration-300 shadow-sm';
                button.style.width = '100px';
                button.innerHTML = `
                    <span>${settings._iDisplayLength} / page</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" class="text-current" fill="none">
                        <path d="M5.99977 9.00005L11.9998 15L17.9998 9" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="16" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                `;
                
                button.onclick = function() {
                    const existingDropdown = document.querySelector('.length-menu-dropdown');
                    if (existingDropdown) {
                        existingDropdown.remove();
                        return;
                    }

                    const menu = document.createElement('div');
                    menu.className = 'length-menu-dropdown absolute right-4 mt-2 py-2 w-32 bg-white dark:bg-neutral-800 rounded-md shadow-lg border border-neutral-200 dark:border-neutral-700 z-50';
                    
                    [10, 25, 50, 100].forEach(number => {
                        const option = document.createElement('button');
                        option.className = `w-full px-4 py-2 text-left text-sm hover:bg-neutral-100 dark:hover:bg-neutral-700 ${settings._iDisplayLength === number ? 'text-neutral-900 dark:text-white bg-neutral-50 dark:bg-neutral-700' : 'text-neutral-600 dark:text-neutral-400'}`;
                        option.textContent = `${number} / page`;
                        option.onclick = function() {
                            settings.oInstance.fnSettings()._iDisplayLength = number;
                            settings.oInstance.fnDraw();
                        };
                        menu.appendChild(option);
                    });
                    
                    lengthMenuContainer.appendChild(menu);
                    
                    // Close menu when clicking outside
                    document.addEventListener('click', function closeMenu(e) {
                        if (!menu.contains(e.target) && !button.contains(e.target)) {
                            menu.remove();
                            document.removeEventListener('click', closeMenu);
                        }
                    });
                };
                
                lengthMenuContainer.appendChild(button);
            } else if (existingMenu) {
                // Update the display length text if menu already exists
                const displayText = existingMenu.querySelector('span');
                if (displayText) {
                    displayText.textContent = `${settings._iDisplayLength} / page`;
                }
            }

            // Add checkbox functionality
            const selectAllCheckbox = document.querySelector('.select-all-checkbox');
            const rowCheckboxes = document.querySelectorAll('.row-checkbox');

            if (selectAllCheckbox) {
                selectAllCheckbox.addEventListener('change', function() {
                    rowCheckboxes.forEach(checkbox => {
                        checkbox.checked = this.checked;
                    });
                });
            }

            // Update header checkbox when row checkboxes change
            rowCheckboxes.forEach(checkbox => {
                checkbox.addEventListener('change', function() {
                    const allChecked = [...rowCheckboxes].every(cb => cb.checked);
                    const someChecked = [...rowCheckboxes].some(cb => cb.checked);
                    
                    if (selectAllCheckbox) {
                        selectAllCheckbox.checked = allChecked;
                        // Optional: add indeterminate state
                        selectAllCheckbox.indeterminate = someChecked && !allChecked;
                    }
                });
            });

            // Style pagination buttons
            $('.paginate_button').each(function() {
                $(this).addClass('p-2 rounded-md').css({
                    'display': 'flex',
                    'align-items': 'center',
                    'justify-content': 'center',
                    'min-width': '36px',
                    'min-height': '36px'
                });

                if ($(this).hasClass('current')) {
                    $(this).addClass('bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white')
                        .removeClass('bg-white dark:bg-neutral-800 ');
                } else {
                    $(this).addClass('bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white cursor-pointer');
                }
            });

            // Style pagination container
            $('.dataTables_paginate').addClass('flex items-center gap-2')
                .css({
                    'display': 'flex',
                    'align-items': 'center',
                    'gap': '0.5rem'
                });

            // Style the numbers container
            $('.dataTables_paginate span').addClass('flex gap-1')
                .css({
                    'display': 'flex',
                    'gap': '0.25rem'
                });

            // Style info text
            $('.dataTables_info').addClass('text-sm font-normal opacity-60');

            // Add gap between buttons
            $('.pagination').addClass('flex gap-1');
        },
        createdRow: function(row, data, dataIndex) {
            // Add classes for row styling and equal height cells
            $(row).addClass('text-neutral-900 dark:text-neutral-100 bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-700 cursor-pointer');
            
            // Make all cells in the row equal height
            $(row).find('td').addClass('h-full align-middle');
            
            // Wrap cell contents in a div for consistent padding and height
            $(row).find('td').each(function() {
                const content = $(this).html();
                if (!content.includes('div class="')) { // Only wrap if not already wrapped
                    $(this).html(`<div class="h-full flex items-center">${content}</div>`);
                }
            });
        },
        initComplete: function() {
            // Add dark mode styles for sort icons
            $('head').append(`
                <style>
                    .dark .sorting:before,
                    .dark .sorting:after,
                    .dark .sorting_asc:before,
                    .dark .sorting_asc:after,
                    .dark .sorting_desc:before,
                    .dark .sorting_desc:after {
                        color: #fff !important;
                    }
                </style>
            `);
        }
    });

    function createPageButton(number, isActive) {
        const buttonClass = isActive 
            ? 'p-2 rounded-md bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white'
            : 'p-2 rounded-md bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white';
        
        return `
            <button class="${buttonClass}" data-page="${number}">
                <span style="width: 20px; height: 20px;" class="flex items-center justify-center">
                    ${number}
                </span>
            </button>
        `;
    }

    function createEllipsis() {
        return `
            <button class="p-2 rounded-md bg-white dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400">
                <span style="width: 20px; height: 20px;" class="flex items-center justify-center">
                    ...
                </span>
            </button>
        `;
    }
});
