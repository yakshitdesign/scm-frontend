document.addEventListener('DOMContentLoaded', function() {
    const invoices = [
        {
            id: 'SM324DT11',
            project: 'Randhurst Macys',
            customer: 'John Doe',
            invoiceDate: 'Oct 12, 2024',
            amount: '$11,240.23',
            dueAmount: '$4,240.23',
            dueDate: 'Oct 12, 2024',
            status: 'On Going'
        },
        {
            id: 'SM324DT12',
            project: 'Woodfield Mall',
            customer: 'Jane Smith',
            invoiceDate: 'Oct 15, 2024', 
            amount: '$8,750.50',
            dueAmount: '$3,250.50',
            dueDate: 'Oct 15, 2024',
            status: 'Pending'
        },
        {
            id: 'SM324DT13',
            project: 'Oakbrook Center',
            customer: 'Bob Wilson',
            invoiceDate: 'Oct 18, 2024',
            amount: '$15,325.75',
            dueAmount: '$5,325.75', 
            dueDate: 'Oct 18, 2024',
            status: 'On Going'
        },
        {
            id: 'SM324DT14',
            project: 'Northbrook Court',
            customer: 'Sarah Johnson',
            invoiceDate: 'Oct 20, 2024',
            amount: '$9,875.25',
            dueAmount: '$2,875.25',
            dueDate: 'Oct 20, 2024',
            status: 'Completed'
        },
        {
            id: 'SM324DT15',
            project: 'Old Orchard Mall',
            customer: 'Mike Brown',
            invoiceDate: 'Oct 22, 2024',
            amount: '$12,450.00',
            dueAmount: '$4,450.00',
            dueDate: 'Oct 22, 2024',
            status: 'On Going'
        },
        {
            id: 'SM324DT16', 
            project: 'Fox Valley Mall',
            customer: 'Emily Davis',
            invoiceDate: 'Oct 25, 2024',
            amount: '$18,750.00',
            dueAmount: '$6,750.00',
            dueDate: 'Oct 25, 2024',
            status: 'Pending'
        },
        {
            id: 'SM324DT17',
            project: 'Gurnee Mills',
            customer: 'Tom Wilson',
            invoiceDate: 'Oct 28, 2024',
            amount: '$9,325.50',
            dueAmount: '$3,325.50',
            dueDate: 'Oct 28, 2024',
            status: 'Completed'
        },
        {
            id: 'SM324DT18',
            project: 'Hawthorn Mall',
            customer: 'Lisa Anderson',
            invoiceDate: 'Oct 30, 2024',
            amount: '$14,875.25',
            dueAmount: '$5,875.25',
            dueDate: 'Oct 30, 2024',
            status: 'On Going'
        },
        {
            id: 'SM324DT19',
            project: 'River Oaks Center',
            customer: 'Mark Taylor',
            invoiceDate: 'Nov 2, 2024',
            amount: '$11,250.75',
            dueAmount: '$4,250.75',
            dueDate: 'Nov 2, 2024',
            status: 'Pending'
        },
        {
            id: 'SM324DT20',
            project: 'Chicago Ridge Mall',
            customer: 'Amy Martinez',
            invoiceDate: 'Nov 5, 2024',
            amount: '$16,450.00',
            dueAmount: '$5,450.00',
            dueDate: 'Nov 5, 2024',
            status: 'On Going'
        },
        {
            id: 'SM324DT21',
            project: 'Yorktown Center',
            customer: 'David Clark',
            invoiceDate: 'Nov 8, 2024',
            amount: '$13,725.50',
            dueAmount: '$4,725.50',
            dueDate: 'Nov 8, 2024',
            status: 'Completed'
        },
        {
            id: 'SM324DT22',
            project: 'Stratford Square',
            customer: 'Jennifer White',
            invoiceDate: 'Nov 10, 2024',
            amount: '$10,850.25',
            dueAmount: '$3,850.25',
            dueDate: 'Nov 10, 2024',
            status: 'On Going'
        },
        {
            id: 'SM324DT23',
            project: 'Spring Hill Mall',
            customer: 'Kevin Lee',
            invoiceDate: 'Nov 12, 2024',
            amount: '$15,975.00',
            dueAmount: '$5,975.00',
            dueDate: 'Nov 12, 2024',
            status: 'Pending'
        },
        {
            id: 'SM324DT24',
            project: 'Louis Joliet Mall',
            customer: 'Rachel Green',
            invoiceDate: 'Nov 15, 2024',
            amount: '$12,350.75',
            dueAmount: '$4,350.75',
            dueDate: 'Nov 15, 2024',
            status: 'On Going'
        },
        {
            id: 'SM324DT25',
            project: 'Water Tower Place',
            customer: 'Daniel Moore',
            invoiceDate: 'Nov 18, 2024',
            amount: '$17,825.50',
            dueAmount: '$6,825.50',
            dueDate: 'Nov 18, 2024',
            status: 'Completed'
        },
        // Add more invoice data as needed
    ];

    const columns = [
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
            data: 'project',
            className: 'px-4 py-2 text-left border-r text-sm font-normal border-neutral-200 dark:border-neutral-600'
        },
        { 
            data: 'customer',
            className: 'px-4 py-2 text-left border-r text-sm font-normal border-neutral-200 dark:border-neutral-600'
        },
        { 
            data: 'invoiceDate',
            className: 'px-4 py-2 text-left border-r text-sm font-normal border-neutral-200 dark:border-neutral-600'
        },
        { 
            data: 'amount',
            className: 'px-4 py-2 text-left border-r text-sm font-normal border-neutral-200 dark:border-neutral-600'
        },
        { 
            data: 'dueAmount',
            className: 'px-4 py-2 text-left border-r text-sm font-normal border-neutral-200 dark:border-neutral-600',
            render: function(data) {
                return `<span class="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-sm font-medium text-red-700 ring-1 ring-inset ring-red-600/10 dark:bg-red-900/30 dark:text-red-400 dark:ring-red-500/20">${data}</span>`;
            }
        },
        { 
            data: 'dueDate',
            className: 'px-4 py-2 text-left border-r text-sm font-normal border-neutral-200 dark:border-neutral-600'
        },
        { 
            data: 'status',
            className: 'px-4 py-2 text-left border-r text-sm font-normal border-neutral-200 dark:border-neutral-600',
            render: function(data) {
                let statusClass = '';
                switch(data.toLowerCase()) {
                    case 'on going':
                        statusClass = 'bg-orange-50 text-orange-700 ring-orange-600/20 dark:bg-orange-400/30 dark:text-orange-300 dark:ring-orange-400/20';
                        break;
                    case 'pending':
                        statusClass = 'bg-neutral-100 text-neutral-700 ring-neutral-600/20 dark:bg-neutral-400/30 dark:text-neutral-300 dark:ring-neutral-400/20';
                        break;
                    case 'completed':
                        statusClass = 'bg-green-50 text-green-700 ring-green-600/20 dark:bg-green-400/30 dark:text-green-300 dark:ring-green-400/20';
                        break;
                    default:
                        statusClass = 'bg-neutral-100 text-neutral-700 ring-neutral-600/20 dark:bg-neutral-400/30 dark:text-neutral-300 dark:ring-neutral-400/20';
                }
                return `<span class="inline-flex items-center rounded-full ${statusClass} px-3 py-1 text-sm font-medium ring-1 ring-inset">${data}</span>`;
            }
        },
        {
            // Actions column
            data: null,
            className: 'w-1 p-2 text-left text-sm font-normal',
            orderable: false,
            render: function() {
                return `
                    <div class="flex gap-2 justify-end items-center">
                        <button class="flex items-center gap-1 focus:outline-none hover:bg-neutral-200 dark:hover:bg-neutral-600 rounded-md p-2 bg-neutral-200 dark:bg-neutral-700">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" class="text-current" fill="none">
                                <path d="M12 4V20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M4 12H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span class="text-sm">Add</span>
                        </button>
                        <div class="relative">
                            <button class="focus:outline-none hover:bg-neutral-200 dark:hover:bg-neutral-600 rounded-md p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" class="text-current" fill="none">
                                    <path d="M11.9922 12H12.0012" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M17.992 12H18.001" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M5.99981 12H6.00879" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                `;
            }
        }
    ];

    $('#accountingTable').DataTable({
        data: invoices,
        columns: columns,
        pageLength: 12,
        dom: '<"overflow-x-auto"t><"flex items-center justify-between p-4 border-t border-neutral-200 dark:border-neutral-700"<"hidden md:flex text-sm font-normal text-neutral-500 dark:text-neutral-400"i><"flex items-center gap-2"p><"custom-length-menu-container">>',
        language: {
            info: "Showing _START_ to _END_ of _TOTAL_ invoices",
            lengthMenu: "_MENU_ / page",
            paginate: {
                first: '<<',
                previous: '<',
                next: '>',
                last: '>>'
            }
        },
        order: [[1, 'asc']],
        drawCallback: function(settings) {
            const api = this.api();
            const pageInfo = api.page.info();

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

            // Add gap between buttons
            $('.pagination').addClass('flex gap-1');
        },
        createdRow: function(row, data, dataIndex) {
            $(row).addClass('text-neutral-900 dark:text-neutral-100 bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-700 cursor-pointer');
        }
    });
});
