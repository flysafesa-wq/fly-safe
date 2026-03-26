import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function WhatsAppButton() {
  const { t, dir } = useLanguage();
  
  return (
    <div className={`fixed bottom-6 ${dir === 'rtl' ? 'left-6' : 'right-6'} z-50`}>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href="https://wa.me/966501234567"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
          >
            {/* Pulsing rings */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75" />
            <span className="relative z-10">
              <MessageCircle className="w-8 h-8" />
            </span>
          </a>
        </TooltipTrigger>
        <TooltipContent side="top" className="bg-foreground text-background font-medium mb-2">
          <p>{t.footer.whatsappTooltip}</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
