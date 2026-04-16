# 🍕 Cantinho da Mari - Sistema de Pedidos para Pizzaria

Sistema de pedidos online simples e eficiente para pizzarias, com integração direta ao WhatsApp. **Sem necessidade de backend ou banco de dados!**

---

## 📋 Funcionalidades

✅ Cardápio completo de pizzas com descrição e preços  
✅ Seleção de tamanho (P, M, G) com atualização automática de preço  
✅ Ingredientes extras personalizáveis  
✅ Carrinho de compras dinâmico  
✅ Formulário de dados do cliente  
✅ Envio automático do pedido para WhatsApp  
✅ Design responsivo (mobile-first)  
✅ Interface extremamente simples e intuitiva  
✅ Máscaras automáticas para telefone  
✅ Feedback visual ao adicionar itens  

---

## 🚀 Como Usar

### 1️⃣ Baixar os Arquivos
Certifique-se de ter os 3 arquivos na mesma pasta:
- `index.html`
- `style.css`
- `script.js`

### 2️⃣ Configurar o Número do WhatsApp

Abra o arquivo `script.js` e encontre esta linha no início:

```javascript
const WHATSAPP_NUMBER = '5511999999999';
```

**Substitua pelo seu número no formato internacional:**

- **55** = Código do Brasil
- **11** = DDD (código da sua cidade)
- **999999999** = Seu número de telefone

**Exemplos:**
- São Paulo (11): `5511987654321`
- Rio de Janeiro (21): `5521987654321`
- Belo Horizonte (31): `5531987654321`

### 3️⃣ Abrir o Site

Basta abrir o arquivo `index.html` em qualquer navegador moderno (Chrome, Firefox, Edge, Safari).

**Não é necessário servidor!** O site funciona diretamente do seu computador.

---

## 🎨 Personalização

### 📝 Como Alterar o Nome da Pizzaria

**No arquivo `index.html`**, encontre e modifique:

```html
<h1>🍕 Cantinho da Mari</h1>
<p class="subtitle">Pizzas artesanais deliciosas</p>
```

E também no `<title>`:
```html
<title>Cantinho da Mari - Pizzaria</title>
```

---

### 🍕 Como Personalizar o Cardápio

**No arquivo `script.js`**, encontre o array `pizzasMenu`:

```javascript
const pizzasMenu = [
    {
        id: 1,
        name: 'Margherita',
        description: 'Molho de tomate, mussarela, tomate fresco e manjericão',
        prices: { P: 25.00, M: 35.00, G: 45.00 }
    },
    // ... mais pizzas
];
```

**Para adicionar uma nova pizza:**

```javascript
{
    id: 9, // Use o próximo número disponível
    name: 'Nome da Pizza',
    description: 'Ingredientes da pizza',
    prices: { P: 25.00, M: 35.00, G: 45.00 } // Defina os preços
}
```

**Para remover uma pizza:**  
Simplesmente delete o bloco completo da pizza desejada.

**Para alterar preços:**  
Modifique os valores em `prices: { P: 25.00, M: 35.00, G: 45.00 }`

---

### 🧀 Como Personalizar Ingredientes Extras

**No arquivo `script.js`**, encontre o array `extrasMenu`:

```javascript
const extrasMenu = [
    { id: 1, name: 'Mussarela extra', price: 5.00 },
    { id: 2, name: 'Catupiry extra', price: 6.00 },
    // ... mais extras
];
```

**Para adicionar um novo extra:**

```javascript
{ id: 8, name: 'Tomate seco', price: 4.00 }
```

**Para remover um extra:**  
Delete a linha correspondente.

---

### 🎨 Como Alterar as Cores

**No arquivo `style.css`**, encontre a seção `:root`:

```css
:root {
    --primary-color: #e74c3c;      /* Cor principal (vermelho) */
    --primary-dark: #c0392b;       /* Cor principal escura */
    --secondary-color: #f39c12;    /* Cor secundária (laranja) */
    --success-color: #27ae60;      /* Cor de sucesso (verde) */
    /* ... */
}
```

**Altere os códigos de cores** conforme sua preferência. Use um [seletor de cores online](https://www.google.com/search?q=color+picker) para escolher.

**Exemplos de combinações:**

**Azul e Verde:**
```css
--primary-color: #3498db;
--primary-dark: #2980b9;
--success-color: #2ecc71;
```

**Roxo e Rosa:**
```css
--primary-color: #9b59b6;
--primary-dark: #8e44ad;
--success-color: #e91e63;
```

---

## 💳 Como Alterar Formas de Pagamento

**No arquivo `index.html`**, encontre o `<select id="payment-method">`:

```html
<select id="payment-method" required>
    <option value="">Selecione...</option>
    <option value="Dinheiro">Dinheiro</option>
    <option value="PIX">PIX</option>
    <option value="Cartão de Débito">Cartão de Débito</option>
    <option value="Cartão de Crédito">Cartão de Crédito</option>
</select>
```

**Para adicionar uma nova forma:**
```html
<option value="ValeRefeição">Vale Refeição</option>
```

**Para remover uma forma:**  
Delete a linha `<option>` correspondente.

---

## 📱 Como Funciona a Integração com WhatsApp

Quando o cliente clica em **"Finalizar Pedido no WhatsApp"**, o sistema:

1. ✅ Valida todos os campos obrigatórios
2. 📝 Monta uma mensagem formatada com:
   - Lista completa do pedido
   - Total a pagar
   - Dados do cliente (nome, telefone, endereço)
   - Forma de pagamento
3. 🔗 Abre o WhatsApp Web ou App com a mensagem pronta
4. 📲 O cliente só precisa clicar em "Enviar"

**Formato da mensagem enviada:**

```
🍕 NOVO PEDIDO - Cantinho da Mari

📋 PEDIDO:
1. Calabresa (M) - R$ 38,00
   Extras: Bacon, Cebola
2. Margherita (G) - R$ 45,00

💰 TOTAL: R$ 83,00

👤 CLIENTE:
Nome: João Silva
Telefone: (11) 98765-4321
Endereço: Rua das Flores, 123 - Centro

💳 PAGAMENTO:
Forma: PIX
```

---

## 🌐 Como Publicar o Site na Internet

### Opção 1: GitHub Pages (GRÁTIS)

1. Crie uma conta no [GitHub](https://github.com)
2. Crie um novo repositório
3. Faça upload dos 3 arquivos (index.html, style.css, script.js)
4. Vá em **Settings > Pages**
5. Selecione a branch `main` e clique em **Save**
6. Seu site estará online em minutos!

### Opção 2: Netlify (GRÁTIS)

1. Acesse [Netlify](https://www.netlify.com)
2. Arraste a pasta com os 3 arquivos
3. Pronto! Seu site está no ar instantaneamente

### Opção 3: Vercel (GRÁTIS)

1. Acesse [Vercel](https://vercel.com)
2. Importe o projeto
3. Deploy automático

---

## 🛠️ Requisitos Técnicos

- ✅ Navegador moderno (Chrome, Firefox, Edge, Safari)
- ✅ JavaScript habilitado
- ✅ Conexão com internet (para abrir o WhatsApp)
- ❌ **NÃO** precisa de servidor
- ❌ **NÃO** precisa de banco de dados
- ❌ **NÃO** precisa de backend

---

## 📂 Estrutura de Arquivos

```
📦 Cantinho da Mari app
 ┣ 📜 index.html       # Estrutura HTML
 ┣ 📜 style.css        # Estilos e design
 ┣ 📜 script.js        # Lógica e funcionalidades
 ┗ 📜 README.md        # Este arquivo de instruções
```

---

## 🎯 Dicas de Uso

### Para Melhor Experiência do Cliente:

1. ✅ **Mantenha o cardápio atualizado** - Remova pizzas indisponíveis
2. ✅ **Preços claros** - Configure preços realistas
3. ✅ **Responda rápido no WhatsApp** - Clientes esperam agilidade
4. ✅ **Teste antes de divulgar** - Faça um pedido teste para você mesmo
5. ✅ **Compartilhe o link** - Envie para seus clientes via WhatsApp, Instagram, Facebook

### Personalizações Avançadas:

Para adicionar mais recursos (ex: horário de funcionamento, taxa de entrega, cupons de desconto), você precisará editar o JavaScript. Se não tiver conhecimento técnico, procure um desenvolvedor.

---

## ❓ Problemas Comuns

### ❌ WhatsApp não abre
**Solução:** Verifique se o número está no formato correto: `5511999999999`

### ❌ Pedido não envia
**Solução:** Certifique-se de que todos os campos obrigatórios estão preenchidos

### ❌ Preços não atualizam
**Solução:** Limpe o cache do navegador (Ctrl + F5)

### ❌ Site não funciona no celular
**Solução:** O site é mobile-first e deve funcionar perfeitamente. Tente outro navegador.

---

## 📞 Suporte

Este é um sistema **simples e funcional** criado para pequenos negócios.  
Para personalizações mais complexas, recomenda-se contratar um desenvolvedor.

---

## 📄 Licença

Código livre para uso comercial e pessoal.  
Sinta-se livre para modificar conforme suas necessidades.

---

## ✨ Changelog

### Versão 1.0
- ✅ Sistema completo de pedidos
- ✅ Integração com WhatsApp
- ✅ Interface responsiva
- ✅ Ingredientes extras
- ✅ Carrinho dinâmico
- ✅ Máscaras de telefone

---

**Desenvolvido com ❤️ para facilitar a vida de pequenos empreendedores**

🍕 **Boas vendas!**
