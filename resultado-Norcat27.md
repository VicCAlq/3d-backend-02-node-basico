Data de atualização: Dia 27/8/2026 às 11:44 

| Questão | Teste | Entregue | Correto | Mensagem de Erro |
|---------|-------|----------|---------|------------------|
| Atividade 2 - Enviar arquivo HTML | GET /index responde com status 200 | ✅ | ❌ | AssertionError: expected 404 to be 200 // Object.is equality |
| Atividade 2 - Enviar arquivo HTML | GET /index envia o arquivo indexAtividade.html | ✅ | ❌ | AssertionError: expected '<!DOCTYPE html>\n<html lang="en">\n<h…' to contain '<title>Página da atividade 2</title>' |
| Atividade 2 - Enviar arquivo HTML | rota inexistente responde com status 404 | ✅ | ✅ | Sem erros |
| Atividade 1 - Enviar HTML | GET /inicio responde com status 200 | ✅ | ✅ | Sem erros |
| Atividade 1 - Enviar HTML | GET /inicio retorna o HTML esperado | ✅ | ✅ | Sem erros |
| Atividade 1 - Enviar HTML | rota inexistente responde com status 404 | ✅ | ✅ | Sem erros |
| Atividade 3 - Enviar JSON | GET /objeto responde com status 200 | ✅ | ✅ | Sem erros |
| Atividade 3 - Enviar JSON | GET /objeto retorna o JSON esperado | ✅ | ✅ | Sem erros |
| Atividade 3 - Enviar JSON | rota inexistente responde com status 404 | ✅ | ✅ | Sem erros |
| Atividade 4 - Três Rotas Diferentes | GET /uno responde com status 200 | ✅ | ✅ | Sem erros |
| Atividade 4 - Três Rotas Diferentes | GET /uno retorna o HTML esperado | ✅ | ✅ | Sem erros |
| Atividade 4 - Três Rotas Diferentes | GET /two responde com o arquivo two.html | ✅ | ❌ | AssertionError: expected 404 to be 200 // Object.is equality |
| Atividade 4 - Três Rotas Diferentes | GET /san retorna o JSON esperado | ✅ | ✅ | Sem erros |
| Atividade 4 - Três Rotas Diferentes | rota inexistente responde com status 404 | ✅ | ✅ | Sem erros |
