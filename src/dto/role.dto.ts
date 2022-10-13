import { ApiProperty } from '@nestjs/swagger';

export class RoleDto {
  @ApiProperty({ example: 'ADMIN', description: 'User role' })
  readonly value: string;

  @ApiProperty({ example: 'Administrator is ...', description: 'Role description' })
  readonly description: string;
}
