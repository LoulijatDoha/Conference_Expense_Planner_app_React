import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
    base: "/Conference_Expense_Planner_app_React/",
  plugins: [react()],
})
