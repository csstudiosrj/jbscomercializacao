import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
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
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const formSchema = z.object({
  nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres."),
  email: z.string().email("E-mail inválido."),
  telefone: z.string().min(10, "Telefone inválido."),
  mensagem: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres."),
});

export function ContactForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      mensagem: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Nossa equipe entrará em contato em breve.",
      duration: 5000,
    });
    form.reset();
  }

  return (
    <div className="bg-card/50 border border-border p-8 rounded-lg backdrop-blur-sm shadow-2xl">
      <h3 className="text-2xl font-bold text-white mb-6 font-heading">Fale Conosco</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="nome"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-muted-foreground uppercase tracking-wider text-xs font-semibold">Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Seu nome completo" className="bg-background/50 border-muted focus:border-primary transition-colors" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-muted-foreground uppercase tracking-wider text-xs font-semibold">E-mail</FormLabel>
                  <FormControl>
                    <Input placeholder="seu@email.com" className="bg-background/50 border-muted focus:border-primary transition-colors" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="telefone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-muted-foreground uppercase tracking-wider text-xs font-semibold">Telefone</FormLabel>
                  <FormControl>
                    <Input placeholder="(21) 90000-0000" className="bg-background/50 border-muted focus:border-primary transition-colors" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="mensagem"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-muted-foreground uppercase tracking-wider text-xs font-semibold">Mensagem</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Como podemos ajudar?" 
                    className="min-h-[120px] bg-background/50 border-muted focus:border-primary transition-colors resize-none" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full h-12 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300">
            Enviar Mensagem
          </Button>
        </form>
      </Form>
    </div>
  );
}
