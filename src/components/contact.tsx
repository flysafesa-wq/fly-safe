import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useLanguage } from '@/hooks/use-language';
import { useToast } from '@/hooks/use-toast';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export function Contact() {
  const { t, dir } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formSchema = z.object({
    name: z.string().min(2, t.contact.form.errorName),
    email: z.string().email(t.contact.form.errorEmail),
    phone: z.string().min(8, t.contact.form.errorPhone),
    serviceType: z.string().min(1, t.contact.form.errorService),
    travelDates: z.string().optional(),
    message: z.string().min(10, t.contact.form.errorMessage),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      serviceType: '',
      travelDates: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setTimeout(() => {
      console.log('Form Submitted:', values);
      setIsSubmitting(false);
      form.reset();
      toast({
        title: t.contact.form.successTitle,
        description: t.contact.form.success,
      });
    }, 1500);
  }

  const infoItems = [
    { icon: <MapPin className="w-6 h-6 text-primary" />, label: t.contact.info.addressLabel, value: t.contact.info.address },
    { icon: <Phone className="w-6 h-6 text-primary" />, label: t.contact.info.phoneLabel, value: `${t.contact.info.phone}\n${t.contact.info.whatsapp}` },
    { icon: <Mail className="w-6 h-6 text-primary" />, label: t.contact.info.emailLabel, value: t.contact.info.email },
    { icon: <Clock className="w-6 h-6 text-primary" />, label: t.contact.info.hoursLabel, value: t.contact.info.hours },
  ];

  return (
    <section id="contact" className="py-24 bg-secondary/10 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            {t.contact.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: dir === 'rtl' ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-card border border-border/50 rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                {infoItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-full flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{item.label}</h4>
                      {item.value.split('\n').map((line, j) => (
                        <p key={j} className="text-muted-foreground" dir="auto" style={{ textAlign: dir === 'rtl' ? 'right' : 'left' }}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg h-[300px] border border-border/50">
              <iframe
                title="Fly Safe Office Location - Riyadh, Saudi Arabia"
                src="https://maps.google.com/maps?q=26.370662,43.931090&hl=ar&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: dir === 'rtl' ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border/50 rounded-2xl p-8 shadow-lg"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.contact.form.name}</FormLabel>
                        <FormControl>
                          <Input placeholder={t.contact.form.namePlaceholder} className="bg-background" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.contact.form.email}</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder={t.contact.form.emailPlaceholder} className="bg-background" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.contact.form.phone}</FormLabel>
                        <FormControl>
                          <Input placeholder={t.contact.form.phonePlaceholder} className="bg-background" dir="ltr" style={{ textAlign: dir === 'rtl' ? 'right' : 'left' }} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="serviceType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.contact.form.serviceType}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-background">
                              <SelectValue placeholder={t.contact.form.serviceType} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {t.contact.form.types.map((type, i) => (
                              <SelectItem key={i} value={type}>{type}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="travelDates"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.contact.form.travelDates}</FormLabel>
                      <FormControl>
                        <Input type="date" className="bg-background" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.contact.form.message}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t.contact.form.messagePlaceholder}
                          className="min-h-[120px] bg-background"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full h-12 text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t.contact.form.submitting : t.contact.form.submit}
                </Button>
              </form>
            </Form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
