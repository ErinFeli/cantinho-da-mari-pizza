// ========================================
// CONFIGURAÇÃO DO WHATSAPP
// ========================================
// IMPORTANTE: Substitua pelo seu número no formato internacional
// Exemplo: 5511999999999 (55 = Brasil, 11 = DDD, 999999999 = número)
const WHATSAPP_NUMBER = '5584991361035';

// ========================================
// CARDÁPIO DE PIZZAS - CANTINHO DA MARI
// ========================================
const pizzasMenu = [
    {
        id: 1,
        name: 'Mussarela',
        description: 'Molho de tomate, queijo mussarela, tomate, orégano e azeitonas',
        prices: { M: 30.00, G: 35.00, GG: 40.00, EG: 45.00, TF: 50.00 }
    },
    {
        id: 2,
        name: 'Calabresa',
        description: 'Molho de tomate, queijo mussarela, calabresa fatiada, tomate, azeitonas e orégano',
        prices: { M: 40.00, G: 45.00, GG: 50.00, EG: 55.00, TF: 60.00 }
    },
    {
        id: 3,
        name: 'Calabresa com Requeijão',
        description: 'Molho de tomate, queijo mussarela, calabresa fatiada, requeijão, tomate, azeitonas e orégano',
        prices: { M: 45.00, G: 50.00, GG: 55.00, EG: 60.00, TF: 65.00 }
    },
    {
        id: 4,
        name: 'Mista',
        description: 'Molho de tomate, presunto, queijo mussarela, tomate, azeitonas e orégano',
        prices: { M: 35.00, G: 40.00, GG: 45.00, EG: 50.00, TF: 55.00 }
    },
    {
        id: 5,
        name: 'Portuguesa',
        description: 'Molho de tomate, presunto, queijo mussarela, ovos cozidos, cebola, azeitonas e orégano',
        prices: { M: 40.00, G: 45.00, GG: 50.00, EG: 55.00, TF: 60.00 }
    },
    {
        id: 6,
        name: 'Baiacatu',
        description: 'Molho de tomate, queijo mussarela, calabresa moída, requeijão, cebola, azeitonas e orégano',
        prices: { M: 45.00, G: 50.00, GG: 55.00, EG: 60.00, TF: 65.00 }
    },
    {
        id: 7,
        name: 'À Moda',
        description: 'Combinação especial de Calabresa, Portuguesa e Frango com Requeijão',
        prices: { M: 50.00, G: 55.00, GG: 60.00, EG: 65.00, TF: 70.00 }
    },
    {
        id: 8,
        name: 'Nordestina',
        description: 'Molho de tomate, queijo mussarela, carne de sol, cebola, azeitonas e orégano',
        prices: { M: 45.00, G: 50.00, GG: 55.00, EG: 60.00, TF: 65.00 }
    },
    {
        id: 9,
        name: 'Nordestina com Requeijão',
        description: 'Molho de tomate, queijo mussarela, carne de sol, requeijão, cebola, azeitonas e orégano',
        prices: { M: 50.00, G: 55.00, GG: 60.00, EG: 65.00, TF: 70.00 }
    },
    {
        id: 10,
        name: 'Frango',
        description: 'Molho de tomate, queijo mussarela, frango desfiado, tomate, cebola, azeitonas e orégano',
        prices: { M: 40.00, G: 45.00, GG: 50.00, EG: 55.00, TF: 60.00 }
    },
    {
        id: 11,
        name: 'Frango com Requeijão',
        description: 'Molho de tomate, queijo mussarela, frango desfiado, requeijão, tomate, cebola, azeitonas e orégano',
        prices: { M: 45.00, G: 50.00, GG: 55.00, EG: 60.00, TF: 65.00 }
    },
    {
        id: 12,
        name: 'Camarão',
        description: 'Molho de tomate, queijo mussarela, camarão temperado, tomate, cebola, azeitonas e orégano',
        prices: { M: 55.00, G: 60.00, GG: 65.00, EG: 70.00, TF: 75.00 }
    },
    {
        id: 13,
        name: 'Camarão com Requeijão',
        description: 'Molho de tomate, queijo mussarela, camarão temperado, requeijão, tomate, cebola, azeitonas e orégano',
        prices: { M: 60.00, G: 65.00, GG: 70.00, EG: 75.00, TF: 80.00 }
    }
];



// ========================================
// VARIÁVEIS GLOBAIS
// ========================================
let cart = [];
let currentPizza = null;
let selectedSize = null;

// ========================================
// INICIALIZAÇÃO
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    renderPizzas();
    setupEventListeners();
    applyPhoneMask();
});

// ========================================
// RENDERIZAR PIZZAS NO CARDÁPIO
// ========================================
function renderPizzas() {
    const pizzasList = document.getElementById('pizzas-list');
    pizzasList.innerHTML = '';
    
    pizzasMenu.forEach(pizza => {
        const pizzaCard = document.createElement('div');
        pizzaCard.className = 'pizza-card';
        pizzaCard.innerHTML = `
            <h3>${pizza.name}</h3>
            <p class="description">${pizza.description}</p>
            <div class="price-info">
                <span class="price">A partir de ${formatPrice(pizza.prices.M)}</span>
                <button class="btn-add" onclick="openPizzaModal(${pizza.id})">
                    Adicionar
                </button>
            </div>
        `;
        pizzasList.appendChild(pizzaCard);
    });
}

// ========================================
// ABRIR MODAL DE PIZZA
// ========================================
function openPizzaModal(pizzaId) {
    currentPizza = pizzasMenu.find(p => p.id === pizzaId);
    if (!currentPizza) return;
    
    // Resetar seleções
    selectedSize = null;
    
    // Atualizar título
    document.getElementById('modal-pizza-name').textContent = currentPizza.name;
    
    // Atualizar preços dos tamanhos
    document.getElementById('price-M').textContent = formatPrice(currentPizza.prices.M);
    document.getElementById('price-G').textContent = formatPrice(currentPizza.prices.G);
    document.getElementById('price-GG').textContent = formatPrice(currentPizza.prices.GG);
    document.getElementById('price-EG').textContent = formatPrice(currentPizza.prices.EG);
    document.getElementById('price-TF').textContent = formatPrice(currentPizza.prices.TF);
    
    // Limpar observações
    document.getElementById('pizza-notes').value = '';
    
    // Remover seleção de tamanhos
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Atualizar total
    updateModalTotal();
    
    // Mostrar modal
    document.getElementById('pizza-modal').classList.add('active');
}



// ========================================
// SELECIONAR TAMANHO
// ========================================
function selectSize(size) {
    selectedSize = size;
    
    // Atualizar visual dos botões
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    event.target.closest('.size-btn').classList.add('selected');
    
    updateModalTotal();
}



// ========================================
// ATUALIZAR TOTAL DO MODAL
// ========================================
function updateModalTotal() {
    let total = 0;
    
    // Adicionar preço do tamanho
    if (selectedSize && currentPizza) {
        total += currentPizza.prices[selectedSize];
    }
    
    document.getElementById('modal-item-total').textContent = formatPrice(total);
}

// ========================================
// ADICIONAR AO CARRINHO
// ========================================
function addToCart() {
    // Validar seleção de tamanho
    if (!selectedSize) {
        alert('Por favor, selecione um tamanho!');
        return;
    }
    
    // Calcular preço total do item
    let itemPrice = currentPizza.prices[selectedSize];
    
    // Pegar observações
    const notes = document.getElementById('pizza-notes').value.trim();
    
    // Criar item do carrinho
    const cartItem = {
        id: Date.now(),
        pizzaName: currentPizza.name,
        size: selectedSize,
        notes: notes,
        price: itemPrice
    };
    
    // Adicionar ao carrinho
    cart.push(cartItem);
    
    // Atualizar interface
    renderCart();
    closeModal();
    
    // Mostrar modal de confirmação
    showConfirmationModal();
}

// ========================================
// RENDERIZAR CARRINHO
// ========================================
function renderCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p class="empty-cart">Seu carrinho está vazio</p>';
        document.getElementById('cart-total').textContent = 'R$ 0,00';
        return;
    }
    
    cartItemsDiv.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        total += item.price;
        
        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';
        
        let notesText = '';
        if (item.notes) {
            notesText = `<div class="cart-item-details"><strong>Obs:</strong> ${item.notes}</div>`;
        }
        
        cartItemDiv.innerHTML = `
            <div class="cart-item-header">
                <span class="cart-item-name">${item.pizzaName} (${item.size})</span>
                <span class="cart-item-price">${formatPrice(item.price)}</span>
            </div>
            ${notesText}
            <button class="btn-remove" onclick="removeFromCart(${item.id})">Remover</button>
        `;
        
        cartItemsDiv.appendChild(cartItemDiv);
    });
    
    document.getElementById('cart-total').textContent = formatPrice(total);
}

// ========================================
// REMOVER DO CARRINHO
// ========================================
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    renderCart();
}

// ========================================
// FECHAR MODAL
// ========================================
function closeModal() {
    document.getElementById('pizza-modal').classList.remove('active');
}

// ========================================
// MOSTRAR NOTIFICAÇÃO
// ========================================
function showNotification() {
    const notification = document.getElementById('notification');
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
}

// ========================================
// MOSTRAR MODAL DE CONFIRMAÇÃO
// ========================================
function showConfirmationModal() {
    document.getElementById('confirmation-modal').classList.add('active');
}

// ========================================
// CONTINUAR ADICIONANDO ITENS
// ========================================
function continueOrdering() {
    document.getElementById('confirmation-modal').classList.remove('active');
    showNotification();
}

// ========================================
// IR PARA FINALIZAÇÃO (FORMULÁRIO)
// ========================================
function goToCheckout() {
    document.getElementById('confirmation-modal').classList.remove('active');
    
    // Scroll suave para o formulário
    const form = document.querySelector('.customer-form-section');
    if (form) {
        form.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Destacar formulário brevemente
        form.style.animation = 'highlight 1s ease';
        setTimeout(() => {
            form.style.animation = '';
        }, 1000);
    }
}

// ========================================
// FINALIZAR PEDIDO (ENVIAR PARA WHATSAPP)
// ========================================
function finishOrder(event) {
    event.preventDefault();
    
    // Validar carrinho
    if (cart.length === 0) {
        alert('Seu carrinho está vazio! Adicione itens antes de finalizar o pedido.');
        return;
    }
    
    // Pegar dados do formulário
    const customerName = document.getElementById('customer-name').value.trim();
    const customerPhone = document.getElementById('customer-phone').value.trim();
    const customerAddress = document.getElementById('customer-address').value.trim();
    const paymentMethod = document.getElementById('payment-method').value;
    const changeFor = document.getElementById('change-for').value.trim();
    
    // Validações
    if (!customerName || !customerPhone || !customerAddress || !paymentMethod) {
        alert('Por favor, preencha todos os campos obrigatórios!');
        return;
    }
    
    // Montar mensagem do pedido
    let message = `🍕 *NOVO PEDIDO - CANTINHO DA MARI PIZZA* 🍕\n\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━━\n\n`;
    
    // Itens do pedido
    message += `📋 *ITENS DO PEDIDO:*\n\n`;
    cart.forEach((item, index) => {
        message += `${index + 1}. *${item.pizzaName}* (Tamanho ${item.size})\n`;
        message += `   💰 ${formatPrice(item.price)}\n`;
        if (item.notes) {
            message += `   📝 *Obs:* ${item.notes}\n`;
        }
        message += `\n`;
    });
    
    // Total
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    message += `━━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `💰 *VALOR TOTAL: ${formatPrice(total)}*\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━━\n\n`;
    
    // Dados do cliente
    message += `👤 *DADOS DO CLIENTE:*\n\n`;
    message += `📛 Nome: ${customerName}\n`;
    message += `📱 Telefone: ${customerPhone}\n`;
    message += `📍 Endereço: ${customerAddress}\n\n`;
    
    // Pagamento
    message += `━━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `💳 *FORMA DE PAGAMENTO:*\n`;
    message += `${paymentMethod}\n`;
    if (paymentMethod === 'Dinheiro' && changeFor) {
        message += `💵 Troco para: ${changeFor}\n`;
    }
    message += `━━━━━━━━━━━━━━━━━━━━━━\n\n`;
    message += `✅ Pedido realizado com sucesso!\n`;
    message += `⏰ Aguardando confirmação...`;
    
    // Codificar mensagem para URL
    const encodedMessage = encodeURIComponent(message);
    
    // Montar URL do WhatsApp
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    // Abrir WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Limpar carrinho e formulário após envio
    setTimeout(() => {
        if (confirm('Pedido enviado! Deseja limpar o carrinho?')) {
            cart = [];
            renderCart();
            document.getElementById('customer-form').reset();
        }
    }, 1000);
}

// ========================================
// FORMATAR PREÇO
// ========================================
function formatPrice(price) {
    return `R$ ${price.toFixed(2).replace('.', ',')}`;
}

// ========================================
// MÁSCARA DE TELEFONE
// ========================================
function applyPhoneMask() {
    const phoneInput = document.getElementById('customer-phone');
    
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length > 11) {
            value = value.slice(0, 11);
        }
        
        if (value.length > 6) {
            value = value.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, '($1) $2-$3');
        } else if (value.length > 2) {
            value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
        } else if (value.length > 0) {
            value = value.replace(/^(\d*)/, '($1');
        }
        
        e.target.value = value;
    });
}

// ========================================
// CONFIGURAR EVENT LISTENERS
// ========================================
function setupEventListeners() {
    // Fechar modal
    document.querySelector('.close-modal').addEventListener('click', closeModal);
    
    // Fechar modal clicando fora
    document.getElementById('pizza-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });
    
    // Botões de tamanho
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            selectSize(this.dataset.size);
        });
    });
    
    // Botão adicionar ao carrinho
    document.getElementById('btn-add-to-cart').addEventListener('click', addToCart);
    
    // Formulário de finalização
    document.getElementById('customer-form').addEventListener('submit', finishOrder);
    
    // Mostrar campo de troco quando selecionar "Dinheiro"
    document.getElementById('payment-method').addEventListener('change', function() {
        const changeGroup = document.getElementById('change-group');
        if (this.value === 'Dinheiro') {
            changeGroup.style.display = 'block';
        } else {
            changeGroup.style.display = 'none';
        }
    });
}
