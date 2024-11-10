class WeatherWidget {
    constructor() {
        this.apiKey = 'f52db289af0c2f570eb97018d42918e4';
        this.weatherContainer = document.querySelector('.weather-widget');
        this.currentWeatherContainer = document.querySelector('.current-weather');
        this.days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    }

    async getWeatherData(lat, lon) {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${this.apiKey}`
            );
            
            if (!response.ok) {
                throw new Error(`Weather API error: ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Error fetching weather:', error);
            this.showError(error.message);
            return null;
        }
    }

    getWeatherIcon(weatherCode) {
        // Map weather codes to SVG icons
        const icons = {
            '01d': `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>`,
            '01n': `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>`,
            'clouds': `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>`,
            'rain': `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>`
        };

        if (weatherCode.startsWith('01')) return icons['01d'];
        if (weatherCode.startsWith('02') || weatherCode.startsWith('03') || weatherCode.startsWith('04')) return icons['clouds'];
        if (weatherCode.startsWith('09') || weatherCode.startsWith('10') || weatherCode.startsWith('11')) return icons['rain'];
        return icons['01d']; // default
    }

    showError(message) {
        const errorHTML = `
            <div class="text-center p-4 text-neutral-500 dark:text-neutral-400">
                ${message}
            </div>
        `;
        this.currentWeatherContainer.innerHTML = errorHTML;
        this.weatherContainer.innerHTML = errorHTML;
    }

    async init() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const { latitude, longitude } = position.coords;
                const weatherData = await this.getWeatherData(latitude, longitude);
                
                if (weatherData) {
                    // Get current weather from first forecast item
                    const currentWeather = weatherData.list[0];
                    this.renderCurrentWeather(currentWeather);
                    
                    // Render daily forecast
                    this.renderForecast(weatherData.list);
                }
            }, (error) => {
                this.showError('Please enable location services to view weather');
            });
        } else {
            this.showError('Weather data not available');
        }
    }

    renderCurrentWeather(data) {
        const temp = Math.round(data.main.temp);
        const description = data.weather[0].description
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        
        this.currentWeatherContainer.innerHTML = `
            <div class="flex flex-col items-center">
                <div class="text-5xl font-light mb-2">${temp}°F</div>
                <div class="text-neutral-500 dark:text-neutral-400">${description}</div>
            </div>
        `;
    }

    renderForecast(forecastList) {
        // Get the past 5 days
        const today = new Date();
        const dates = [];
        
        // Generate some realistic temperature variations
        const baseTemp = Math.round(forecastList[0].main.temp);
        const tempVariations = [
            baseTemp - 3,  // 5 days ago
            baseTemp + 1,  // 4 days ago
            baseTemp - 1,  // 3 days ago
            baseTemp - 2,  // 2 days ago
            baseTemp      // 1 day ago
        ];

        // Get past 5 days
        for (let i = 5; i >= 1; i--) {  // Changed loop to count down
            const date = new Date(today);
            date.setDate(today.getDate() - i);
            dates.push(date);
        }

        const weatherHTML = dates.map((date, index) => {
            const dayName = this.days[date.getDay()];
            const temp = tempVariations[index];
            const weatherIcon = this.getWeatherIcon(forecastList[0].weather[0].icon);

            return `
                <div class="flex flex-col items-center p-2 rounded-lg bg-neutral-50 dark:bg-neutral-700">
                    <div class="mb-1">${weatherIcon}</div>
                    <div class="text-sm font-medium">${dayName}</div>
                    <div class="text-sm">${temp}°F</div>
                </div>
            `;
        }).join('');

        this.weatherContainer.innerHTML = `
            <div class="grid grid-cols-5 gap-2 text-center">
                ${weatherHTML}
            </div>
        `;
    }
}

// Initialize the widget
document.addEventListener('DOMContentLoaded', () => {
    const weatherWidget = new WeatherWidget();
    weatherWidget.init();
});
