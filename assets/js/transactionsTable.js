document.addEventListener('DOMContentLoaded', function() {
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
            type: 'Equipment',
            payment: 'Cash',
            date: 'Oct 15, 2024',
            business: 'Equipment Rentals Inc',
            description: 'Excavator Rental',
            amount: '$850.00',
            employee: 'Jane Smith',
            project: 'Downtown Plaza'
        },
        {
            id: '03',
            type: 'Services',
            payment: 'Bank Transfer',
            date: 'Oct 16, 2024', 
            business: 'ABC Plumbing',
            description: 'Plumbing Installation',
            amount: '$2,500.00',
            employee: 'Mike Johnson',
            project: 'Oakbrook Mall'
        },
        {
            id: '04',
            type: 'Materials',
            payment: 'Credit Card',
            date: 'Oct 18, 2024',
            business: 'Lowes',
            description: 'Electrical Supplies',
            amount: '$678.45',
            employee: 'Sarah Wilson',
            project: 'Highland Park'
        },
        {
            id: '05',
            type: 'Tools',
            payment: 'Debit Card',
            date: 'Oct 20, 2024',
            business: 'Tool Depot',
            description: 'Power Tools Purchase',
            amount: '$945.75',
            employee: 'Tom Brown',
            project: 'Northbrook Court'
        },
        {
            id: '06',
            type: 'Materials',
            payment: 'Credit Card',
            date: 'Oct 22, 2024',
            business: 'Menards',
            description: 'Building Materials',
            amount: '$1,567.89',
            employee: 'Chris Davis',
            project: 'Woodfield Mall'
        },
        {
            id: '07',
            type: 'Services',
            payment: 'Check',
            date: 'Oct 25, 2024',
            business: 'XYZ Electric',
            description: 'Electrical Work',
            amount: '$3,200.00',
            employee: 'Lisa Anderson',
            project: 'Old Orchard'
        },
        {
            id: '08',
            type: 'Equipment',
            payment: 'Bank Transfer',
            date: 'Oct 27, 2024',
            business: 'Heavy Machinery Co',
            description: 'Crane Rental',
            amount: '$4,500.00',
            employee: 'Mark Taylor',
            project: 'River North'
        },
        {
            id: '09',
            type: 'Materials',
            payment: 'Credit Card',
            date: 'Oct 29, 2024',
            business: 'Steel Supply Inc',
            description: 'Steel Beams',
            amount: '$5,678.90',
            employee: 'David Miller',
            project: 'Loop Project'
        },
        {
            id: '10',
            type: 'Services',
            payment: 'Wire Transfer',
            date: 'Oct 31, 2024',
            business: 'Quality Contractors',
            description: 'Subcontractor Payment',
            amount: '$7,890.00',
            employee: 'Robert Wilson',
            project: 'Michigan Ave'
        },
        // Add more transaction data as needed
    ];

    // Initialize DataTable
    const table = $('#transactionsTable').DataTable({
        data: transactions,
        columns: [
            {
                // Checkbox column
                data: null,
                className: 'w-1 px-4 py-2 text-left border-r text-sm font-medium border-neutral-200 dark:border-neutral-600',
                orderable: false,
                render: function() {
                    return `
                        <div class="flex justify-center items-center">
                            <label class="flex items-center cursor-pointer relative">
                                <input type="checkbox" class="row-checkbox peer h-4 w-4 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 dark:border-neutral-500 checked:bg-slate-800 dark:checked:bg-neutral-200 checked:border-slate-800 dark:checked:border-neutral-200" />
                                <span class="absolute text-white dark:text-neutral-900 opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                            </label>
                        </div>
                    `;
                }
            },
            { 
                data: 'id',
                className: 'px-4 py-2 text-left border-r text-sm font-normal border-neutral-200 dark:border-neutral-600'
            },
            { 
                data: 'type',
                className: 'px-4 py-2 text-left border-r text-sm font-normal border-neutral-200 dark:border-neutral-600'
            },
            { 
                data: 'payment',
                className: 'px-4 py-2 text-left border-r text-sm font-normal border-neutral-200 dark:border-neutral-600'
            },
            { 
                data: 'date',
                className: 'px-4 py-2 text-left border-r text-sm font-normal border-neutral-200 dark:border-neutral-600'
            },
            { 
                data: 'business',
                className: 'px-4 py-2 text-left border-r text-sm font-normal border-neutral-200 dark:border-neutral-600'
            },
            { 
                data: 'description',
                className: 'px-4 py-2 text-left border-r text-sm font-normal border-neutral-200 dark:border-neutral-600'
            },
            { 
                data: 'amount',
                className: 'px-4 py-2 text-left border-r text-sm font-normal border-neutral-200 dark:border-neutral-600'
            },
            { 
                data: 'employee',
                className: 'px-4 py-2 text-left border-r text-sm font-normal border-neutral-200 dark:border-neutral-600'
            },
            { 
                data: 'project',
                className: 'px-4 py-2 text-left border-r text-sm font-normal border-neutral-200 dark:border-neutral-600'
            },
            {
                // Actions column
                data: null,
                orderable: false,
                className: 'w-1 p-2 text-left text-sm font-normal',
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
        pageLength: 12,
        dom: '<"overflow-x-auto"t><"flex items-center justify-between p-4 border-t border-neutral-200 dark:border-neutral-700"<"hidden md:flex text-sm font-normal text-neutral-500 dark:text-neutral-400"i><"flex items-center gap-2"p><"custom-length-menu-container">>',
        language: {
            info: "Showing _START_ to _END_ of _TOTAL_ transactions",
            lengthMenu: "_MENU_ / page",
            paginate: {
                first: '<<',
                previous: '<',
                next: '>',
                last: '>>'
            }
        },
        drawCallback: function(settings) {
            // Handle select all checkbox
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
                        .removeClass('bg-white dark:bg-neutral-800');
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

            // Style length menu
            $('.dataTables_length select').addClass('hidden md:flex gap-1 justify-between items-center p-2 rounded-md text-sm text-neutral-900 bg-white hover:bg-neutral-200 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 focus:outline-none transition-ease-in-out duration-300 shadow-sm')
                .css('width', '100px');

            // Add gap between buttons
            $('.pagination').addClass('flex gap-1');
        },
        createdRow: function(row, data, dataIndex) {
            $(row).addClass('text-neutral-900 dark:text-neutral-100 bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-700 cursor-pointer');
        }
    });

    // Add click handlers for pagination
    $(document).on('click', '.dataTables_paginate button[data-page]', function() {
        const page = parseInt($(this).data('page'));
        table.page(page).draw('page');
    });
});
