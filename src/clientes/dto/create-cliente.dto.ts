import { Plano } from "src/planos/entities/plano.entity";

export class CreateClienteDto {
    nome: string;
    endereco: object;
    cel: string;
    cpf: string;
    planos: Plano[];
    pppoe: string;
    vencimento: number;
    tp_conec: string;
    obs: string;
    nm_fantasia: string;
    rz_social: string;
    ps_contato: string;
    email: string;
    cnpj: string;
    db: string;
    tp_cliente: string;
}
