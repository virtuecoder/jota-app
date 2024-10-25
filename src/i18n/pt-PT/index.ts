// cspell: language pt
export default {
  app: {
    // No visible text in App.vue
  },
  audioPlayer: {
    unsupportedBrowser: 'O seu navegador não suporta reprodução de áudio :/'
  },
  bibleContent: {
    // No visible text in BibleContent.vue
  },
  bibleSelector: {
    selectBible: 'Selecionar Bíblia',
    selectFromList: 'Selecionar da lista'
  },
  buttonBookSelector: {
    hideButtons: 'Ocultar botões de seleção de livro e capítulo',
    selectBook: 'Selecionar livro',
    showButtons: 'Mostrar botões de seleção de livro e capítulo'
  },
  buttonHelp: {
    help: 'Ajuda'
  },
  buttonReadingPlan: {
    readingPlan: 'Plano de leitura'
  },
  buttonSettings: {
    settings: 'Configurações'
  },
  buttonWholeWords: {
    disable: 'Desativar pesquisa de palavras inteiras',
    enable: 'Ativar pesquisa de palavras inteiras',
    wholeWords: 'Palavras inteiras'
  },
  buttonWordWrap: {
    disable: 'Desativar quebra de linha',
    enable: 'Ativar quebra de linha'
  },
  errorNotFound: {
    backToHome: 'Voltar à página inicial',
    message: 'A página que você está procurando não foi encontrada.',
    title: '404'
  },
  editionStore: {
    editionNotFound: 'Conteúdo da edição não encontrado para {symbol} ({locale})',
    editionFetchError: 'Erro ao buscar conteúdo da edição para {symbol} ({locale})',
    noDataReceived: 'Nenhum dado recebido da solicitação de busca',
  },
  mainPage: {
    clearSearch: 'Limpar critérios e resultados de pesquisa',
    downloading: 'Baixando conteúdo da tradução ...',
    placeholderLong: 'Digite texto contendo referências bíblicas ou uma frase para pesquisar no texto da tradução',
    placeholderShort: 'Referência ou frase',
    search: 'Pesquisar'
  },
  mainToolbar: {
    editionLabel: 'Tradução'
  },
  messageLine: {
    chapterLabel: 'Capítulo',
    copiedFoundVerses: 'Versículos encontrados copiados',
    copiedSelectedVerses: 'Vers��culos selecionados copiados',
    copyFound: 'Copiar versículos encontrados para a área de transferência',
    copySelected: 'Copiar versículos selecionados para a área de transferência',
    defaultTemplate: 'Modelo padrão',
    enableNavigation: 'Ativar navegação',
    formatFailed: 'Formatação falhou',
    formattedLayout: 'Mudar layout para formatado para impressão',
    foundPassages: 'Passagens encontradas:',
    nextChapter: 'Próximo capítulo',
    noSelectedVerses: 'Nenhum versículo selecionado',
    notConfiguredFor: 'não está configurado para',
    notFound: 'Nada encontrado :-(',
    playAudio: 'Reproduzir capítulo em versão de áudio',
    previousChapter: 'Capítulo anterior',
    searching: 'Pesquisando...',
    sortAndDeduplicate: 'Ordenar e remover duplicados'
  },
  pageHeader: {
    backToHome: 'Voltar à página inicial'
  },
  routes: {
    settings: 'Configurações'
  },
  screenModeToggle: {
    autoMode: 'Modo automático',
    darkMode: 'Modo escuro',
    lightMode: 'Modo claro',
    screenMode: 'Modo de tela'
  },
  settingsAppearance: {
    bibleTextExample: 'Exemplo de texto da Bíblia',
    fontSize: 'Tamanho da fonte',
    textDecrease: 'Diminuir texto',
    textIncrease: 'Aumentar texto',
    title: 'Aparência'
  },
  searchStore: {
    errorPrefix: 'Erro:',
    noTemplateFound: 'Nenhum modelo de cópia encontrado',
    editionContentNotLoaded: 'Conteúdo da edição não carregado',
    noFragmentsFound: 'Nenhum fragmento encontrado',
    formattingError: 'Erro durante a formatação:',
    noPassageSelected: 'Nenhuma passagem selecionada',
    sortTooltip: 'Alternar classificação e remoção de duplicatas entre os fragmentos encontrados',
    warningCouldNotFormat: 'Não foi possível formatar',
  },
  settingsBookNames: {
    addButton: 'Adicionar',
    addNewNaming: 'Adicionar nova nomenclatura',
    appDisplay: 'Na tela do aplicativo',
    book: 'livro',
    bookCountError: 'A lista deve conter exatamente 73 livros. Atualmente contém {count} {books}.',
    bookListCannotBeEmpty: 'A lista de livros não pode estar vazia',
    bookNames: 'Nomes dos livros',
    books2to4: 'livros',
    books5plus: 'livros',
    cancelButton: 'Cancelar',
    editButton: 'Editar',
    nameAlreadyExists: 'Este nome já existe',
    nameCannotBeEmpty: 'O nome não pode estar vazio',
    removeButton: 'Remover',
    removeTooltipAppBookNaming: 'Não é possível remover a nomenclatura que está sendo usada na tela do aplicativo',
    removeTooltipCopyTemplate: 'Não é possível remover. A nomenclatura é usada no modelo de cópia "{templateName}" para o idioma {lang}',
    saveButton: 'Salvar',
    standardName: 'Nome padrão',
    title: 'Nomenclatura dos livros bíblicos',
    useOnAppScreen: 'Usar na tela do aplicativo'
  },
  settingsCopyTemplates: {
    addButton: 'Adicionar novo modelo',
    bookNaming: 'Nomenclatura dos livros',
    cancelButton: 'Cancelar',
    defaultTemplate: 'Modelo padrão',
    defaultTemplateTooltip: 'Não é possível remover o modelo padrão',
    editTemplate: 'Editar modelo',
    error: 'Erro',
    formatTemplate: 'Modelo de formatação',
    nameExists: 'Um modelo com este nome já existe',
    nameRequired: 'O nome é obrigatório',
    no: 'Não',
    ok: 'OK',
    removeButton: 'Remover',
    removeConfirm: 'Tem certeza de que deseja remover o modelo',
    removeTitle: 'Remover modelo',
    saveButton: 'Salvar',
    templateDescription: 'Selecione o modelo de formatação e a nomenclatura dos livros para cada idioma:',
    templateName: 'Nome do modelo',
    title: 'Modelos de cópia',
    yes: 'Sim'
  },
  settingsFormatTemplates: {
    addButton: 'Adicionar novo modelo',
    afterContent: 'Após o conteúdo',
    appDisplay: 'Na tela do aplicativo',
    beforeContent: 'Antes do conteúdo',
    cancelButton: 'Cancelar',
    charsAfter: 'depois',
    charsBefore: 'antes',
    charsAroundQuote: 'Caracteres ao redor da citação',
    charsAroundReference: 'Caracteres ao redor da referência',
    charsAroundEditionAbbreviation: 'Caracteres ao redor da abreviação da tradução',
    charsAroundVerseNumber: 'Caracteres ao redor do número do versículo',
    editTitle: 'Editar modelo',
    example: 'Exemplo de passagem formatada',
    forLanguage: 'para o idioma',
    lowercase: 'Minúsculas',
    nameAlreadyExists: 'Um modelo com este nome já existe',
    nameCannotBeEmpty: 'O nome não pode estar vazio',
    newLine: 'Em nova linha',
    newLineForEachVerse: 'Nova linha para cada versículo',
    no: 'Não',
    none: 'Nenhum',
    rangeChar: 'Caractere de intervalo',
    referencePosition: 'Posição da referência',
    removeButton: 'Remover',
    removeDialogMessage: 'Tem certeza de que deseja remover o modelo',
    removeDialogTitle: 'Remover modelo',
    removeTooltip: 'Não é possível remover. O modelo é usado no modelo de cópia',
    sameLine: 'Na mesma linha',
    saveButton: 'Salvar',
    separatorChar: 'Caractere separador',
    templateName: 'Nome do modelo',
    title: 'Modelos de formatação',
    editionAbbreviation: 'Abreviação da tradução',
    uppercase: 'Maiúsculas',
    versesWithNumbers: 'Versículos com números',
    yes: 'Sim'
  },
  settingsGeneral: {
    locale: 'Idioma e região padrão', // Changed from defaultLanguage
    defaultSearchResultLayout: 'Layout padrão dos resultados de pesquisa',
    defaultEdition: 'Tradução padrão',
    formatted: 'Formatado',
    referencePickerOnStart: 'Mostrar seletor de livro/capítulo na página inicial',
    split: 'Dividido',
    title: 'Configurações gerais'
  },
  settingsImportExport: {
    title: 'Importar / Exportar',
    lastImportedFile: 'Último arquivo carregado',
    selectSettingsFile: 'Selecione o arquivo de configurações',
    importButton: 'Importar',
    exportButton: 'Exportar',
    resetSettings: 'Redefinir configurações',
    settingsSaved: 'Configurações salvas no arquivo {filename}',
    settingsNotSaved: 'Não foi possível salvar as configurações',
    importSuccess: 'Configurações importadas com sucesso',
    resetConfirmTitle: 'Redefinir configurações',
    resetConfirmMessage: 'Tem certeza de que deseja redefinir todas as configurações?',
    yes: 'Sim',
    no: 'Não',
    resetSuccess: 'Configurações redefinidas com sucesso',
    selectFileFirst: 'Primeiro selecione um arquivo'
  },
  settingsPage: {
    appearance: 'Aparência',
    bookNames: 'Nomes dos livros',
    copyTemplates: 'Modelos de cópia',
    formatTemplates: 'Modelos de formatação',
    general: 'Geral',
    importExport: 'Importar / Exportar',
    editions: 'Traduções'
  },
  settingsEditions: {
    allSelected: 'Todas selecionadas',
    defaultEdition: 'Tradução padrão',
    downloading: 'Baixando ...',
    selectAll: 'Selecionar todas para o idioma',
    selected: 'Selecionadas',
    title: 'Traduções'
  }
}
