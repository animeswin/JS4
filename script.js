let listaDeCompras = []

while (true) {
    const acao = prompt("Escolha uma ação:\n1 - Adicionar item\n2 - Remover item\n3 - Exibir lista\n4 - Atualizar item\n5 - Sair")

    switch (acao) {
        case "1":
            const itemAdicionar = prompt("Digite o item que deseja adicionar:")
            listaDeCompras.push(itemAdicionar)
            alert(`${itemAdicionar} foi adicionado à lista de compras.`)
            break

        case "2":
            const indiceRemover = parseInt(prompt("Digite o índice do item que deseja remover (começa em 0):"))
            if (indiceRemover >= 0 && indiceRemover < listaDeCompras.length) {
                const itemRemovido = listaDeCompras.splice(indiceRemover, 1)
                alert(`${itemRemovido} foi removido da lista de compras.`)
            } else {
                alert("Índice inválido. Tente novamente.");
            }
            break

        case "3":
            if (listaDeCompras.length === 0) {
                alert("A lista de compras está vazia.")
            } else {
                let listaExibicao = "Itens na lista de compras:\n"
                for (const [indice, item] of listaDeCompras.entries()) {
                    listaExibicao += `${indice}: ${item}\n`
                }
                alert(listaExibicao)
            }
            break

        case "4":
            const indiceAtualizar = parseInt(prompt("Digite o índice do item que deseja atualizar (começa em 0):"))
            if (indiceAtualizar >= 0 && indiceAtualizar < listaDeCompras.length) {
                const novoItem = prompt(`Digite o novo valor para o item no índice ${indiceAtualizar}:`)
                listaDeCompras[indiceAtualizar] = novoItem
                alert(`O item no índice ${indiceAtualizar} foi atualizado para: ${novoItem}.`)
            } else {
                alert("Índice inválido. Tente novamente.")
            }
            break

        case "5":
            alert("Encerrando o programa. Até mais!")
            break

        default:
            alert("Opção inválida. Escolha entre 1 e 5.")
    }

    if (acao === "5") break
}