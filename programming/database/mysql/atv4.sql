-- Criar uma função que deverá receber um valor correspondente à temperatura em graus Fahrenheit e retornar o equivalente em graus Celsius. A fórmula para conversão é: C = (F-32)/1.8

CREATE OR REPLACE FUNCTION F_TO_C (P_F NUMBER) /* Declara a função */
RETURN NUMBER IS /* Define que o retorno será do tipo number */
 V_C NUMBER(4,1); /* Define uma variável do tipo number(4,1) */
BEGIN /* Declara o inicio do código da função */
 V_C := (P_F - 32) / 1.8; /* realiza o cálculo */
 RETURN V_C; /* Retorna o valor do cálculo */
END F_TO_C; /* declara o fim da função */
/

-- Criar uma função que deverá receber o número de matrícula de um funcionário e retornar seu nome e o nome de seu departamento. Considere as tabelas employees e departments do esquema HR do LiveSQL e faça uma cópia de cada uma delas para que você possa criar a sua função (conforme script abaixo).

CREATE OR REPLACE FUNCTION CONSULTA_FUNC(P_MATRICULA NUMBER)
 RETURN VARCHAR2 IS
 V_NOME FUNCIONARIO.NOME%TYPE;
 V_NOME_DEPTO DEPARTAMENTO.NOME_DEPTO%TYPE;

BEGIN
 SELECT NOME, NOME_DEPTO INTO V_NOME, V_NOME_DEPTO
 FROM FUNCIONARIO INNER JOIN DEPARTAMENTO
 ON FUNCIONARIO.COD_DEPTO = DEPARTAMENTO.COD_DEPTO
 WHERE MATRICULA = P_MATRICULA;
 
 RETURN (V_NOME || ' - ' || V_NOME_DEPTO);
END CONSULTA_FUNC;
/

-- função para obter o nome completo do funcionário (fisrt_name concatenado ao last_name) passando o employee_id como parâmetro da função

CREATE OR REPLACE FUNCTION GET_NAME (EMP_ID IN funcionarios.EMPLOYEE_ID%TYPE) 
RETURN VARCHAR2 IS 
	NOME VARCHAR2(100);
BEGIN 
	SELECT FIRST_NAME || ' ' || LAST_NAME INTO NOME
    FROM FUNCIONARIOS
    WHERE funcionarios.EMPLOYEE_ID = EMP_ID;
	RETURN NOME;
END GET_NAME; 
/

-- função para obter o salário do funcionário passando o employee_id como parâmetro da função;

CREATE OR REPLACE FUNCTION GET_SALARY (EMP_ID IN funcionarios.EMPLOYEE_ID%TYPE) 
RETURN VARCHAR2 IS 
	SAL FUNCIONARIOS.SALARY%TYPE;
BEGIN 
	SELECT SALARY INTO SAL
    FROM FUNCIONARIOS
    WHERE funcionarios.EMPLOYEE_ID = EMP_ID;
 
	RETURN SAL;
END GET_SALARY; 
/

BEGIN 
    DBMS_OUTPUT.PUT_LINE('SALARIO: ' || GET_SALARY(123)));
    
-- função para obter o nome completo do funcionário que trabalha em um determinado departamento. Mostre também o nome deste departamento. Passe o department_id como parâmetro.

CREATE OR REPLACE FUNCTION get_employee_by_dept(
    p_dept_id IN NUMBER
) RETURN VARCHAR2
IS
    v_result VARCHAR2(200);
    v_employee_name VARCHAR2(100);
    v_department_name VARCHAR2(100);
BEGIN
    SELECT e.first_name || ' ' || e.last_name, d.department_name
    INTO v_employee_name, v_department_name
    FROM employees e
    JOIN departments d ON e.department_id = d.department_id
    WHERE e.department_id = p_dept_id
    AND ROWNUM = 1;
    
    v_result := 'Funcionário: ' || v_employee_name || ', Departamento: ' || v_department_name;
    
    RETURN v_result;
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        RETURN 'Nenhum funcionário encontrado no departamento com ID: ' || p_dept_id;
    WHEN OTHERS THEN
        RETURN 'Erro ao buscar funcionário: ' || SQLERRM;
END;
/
-- função para obter o valor total da folha de pagamento (soma de salários) dos funcionários da empresa

CREATE OR REPLACE FUNCTION GET_PAYMENT 
RETURN NUMBER IS
	V_FOLHA NUMBER;
BEGIN 
	SELECT SUM(SALARY) INTO V_FOLHA FROM EMPLOYEES;
	RETURN V_FOLHA;
END;

BEGIN 
	DBMS_OUTPUT.PUT_LINE(GET_PAYMENT);
END;

-- função que aplique um aumento de 10% no salário dos funcionários de um determinado departamento e retorne como resultado da função o novo total de salário deste departamento. Passe o department_id como parâmetro.

CREATE OR REPLACE FUNCTION GET_PAYMENT_WITH_ACS(DEPT_ID NUMBER)
RETURN NUMBER IS
	V_FOLHA NUMBER;
BEGIN 

    UPDATE EMPLOYEES 
    SET SALARY = SALARY * 1.1 
    WHERE DEPARTMENT_ID = DEPT_ID;
    	
	SELECT SUM(SALARY) INTO V_FOLHA 
    FROM EMPLOYEES;
	WHERE DEPARTMENT_ID = DEPT_ID;
	RETURN V_FOLHA;
END;

BEGIN 
	DBMS_OUTPUT.PUT_LINE(GET_PAYMENT_WITH_ACS(123));
END;

-- procedimento que imprima uma listagem dos funcionários com os seguintes dados: nome completo do funcionário, data de contratação (hire_date), número de telefone, e-mail, nome do gerente, nome do departamento, salário e percentual de comissão. Dica: você precisará fazer uma junção da tabela funcionarios com ela mesma para obter o nome do gerente.

CREATE OR REPLACE PROCEDURE listar_funcionarios_simples
IS
BEGIN
    DBMS_OUTPUT.PUT_LINE('Listagem de Funcionários:');
    DBMS_OUTPUT.PUT_LINE('----------------------------------------');
    
    FOR func IN (
        SELECT 
            e.first_name || ' ' || e.last_name AS nome_completo,
            e.hire_date,
            e.phone_number,
            e.email,
            m.first_name || ' ' || m.last_name AS nome_gerente,
            d.department_name,
            e.salary,
            e.commission_pct
        FROM 
            employees e
        LEFT JOIN 
            employees m ON e.manager_id = m.employee_id
        LEFT JOIN 
            departments d ON e.department_id = d.department_id
        ORDER BY 
            e.last_name, e.first_name
    ) LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Nome: ' || func.nome_completo ||
            ', Data Contratação: ' || func.hire_date ||
            ', Telefone: ' || NVL(func.phone_number, 'N/A') ||
            ', Email: ' || func.email ||
            ', Gerente: ' || NVL(func.nome_gerente, 'N/A') ||
            ', Departamento: ' || NVL(func.department_name, 'N/A') ||
            ', Salário: ' || func.salary ||
            ', Comissão: ' || NVL(TO_CHAR(func.commission_pct), 'N/A')
        );
    END LOOP;
    
    DBMS_OUTPUT.PUT_LINE('----------------------------------------');
    DBMS_OUTPUT.PUT_LINE('Fim da listagem');
EXCEPTION
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('Erro ao listar funcionários: ' || SQLERRM);
END;
/
