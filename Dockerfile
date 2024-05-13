# Используем официальный образ Node.js в качестве базового образа
FROM node:20-alpine

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json (или yarn.lock)
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные исходные файлы
COPY . .

# Сборка приложения
RUN npm run build

# Экспортируем порт 3000
EXPOSE 3000

# Запускаем приложение
CMD [ "npm", "start" ]